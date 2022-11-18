<template>
  <canvas id="loginCanvasBackground"></canvas>
</template>

<script>
import {
  debounce,
  random,
  times,
  each,
} from 'lodash';

export default {
  data() {
    return {
      wrap: null,
      wrapCanvas: null,
      starDom: null,
      starCanvas: null,
      brightness: 217,
      maxStars: 800,
      w: 0,
      h: 0,
      stars: [],
      resizeHandler: debounce(() => {
        this.renderCanvas();
      }, 150),
      timer: null,
    };
  },
  mounted() {
    this.initCanvas();
    window.addEventListener('resize', this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeHandler);
    this.stop();
  },
  methods: {
    initCanvas() {
      this.wrap = document.getElementById('loginCanvasBackground');
      this.wrapCanvas = this.wrap.getContext('2d');
      this.starDom = document.createElement('canvas');
      this.starCanvas = this.starDom.getContext('2d');
      this.initStar();
      this.renderCanvas();
    },
    initStar() {
      this.starDom.width = 100;
      this.starDom.height = 100;
      const half = this.starDom.width / 2;
      const gradient = this.starCanvas.createRadialGradient(
        half,
        half,
        0,
        half,
        half,
        half,
      );
      gradient.addColorStop(0.025, '#fff');
      gradient.addColorStop(0.1, `hsl(${this.brightness}, 61%, 33%)`);
      gradient.addColorStop(0.25, `hsl(${this.brightness}, 64%, 6%)`);
      gradient.addColorStop(1, 'transparent');
      this.starCanvas.fillStyle = gradient;
      this.starCanvas.beginPath();
      this.starCanvas.arc(half, half, half, 0, Math.PI * 2);
      this.starCanvas.fill();
    },
    renderCanvas() {
      this.wrapCanvas.clearRect(0, 0, 800, 600);
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      this.wrap.width = this.w;
      this.wrap.height = this.h;
      this.stars = times(this.maxStars, () => this.getStar());
      this.start();
    },
    getStar() {
      const orbitRadius = random(this.w / 2 - 50);
      const Star = {
        orbitRadius,
        radius: random(100, orbitRadius) / 10,
        orbitX: this.w / 2,
        orbitY: this.h / 2,
        timePassed: random(this.maxStars),
        speed: random(orbitRadius) / 10000000,
        alpha: random(2, 10) / 10,
      };
      Star.draw = () => {
        const x = Math.sin(Star.timePassed + 1) * Star.orbitRadius + Star.orbitX;
        const y = (Math.cos(Star.timePassed) * Star.orbitRadius) / 2 + Star.orbitY;
        const twinkle = random(10);
        if (twinkle === 1 && Star.alpha > 0) {
          Star.alpha -= 0.05;
        } else if (twinkle === 2 && Star.alpha < 1) {
          Star.alpha += 0.05;
        }
        this.wrapCanvas.globalAlpha = Star.alpha;
        this.wrapCanvas.drawImage(
          this.starDom,
          x - Star.radius / 2,
          y - Star.radius / 2,
          Star.radius,
          Star.radius,
        );
        Star.timePassed += Star.speed;
      };
      return Star;
    },
    drawStar() {
      this.wrapCanvas.globalCompositeOperation = 'source-over';
      this.wrapCanvas.globalAlpha = 0.8;
      this.wrapCanvas.fillStyle = `hsla(${this.brightness}, 64%, 6%, 1)`;
      this.wrapCanvas.fillRect(0, 0, this.w, this.h);
      this.wrapCanvas.globalCompositeOperation = 'lighter';
      each(this.stars, (star) => {
        star.draw();
      });
    },
    start() {
      this.stop();
      this.timer = setInterval(() => {
        this.drawStar();
      }, 100);
    },
    stop() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
  },
};
</script>
