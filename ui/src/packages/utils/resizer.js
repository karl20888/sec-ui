import {
  debounce,
  isFunction,
  isArray,
  extend,
  sortedIndex,
  isNull,
  isUndefined,
} from 'lodash';

class Resizer {
  constructor(options, cb = () => {}) {
    this.temp = null;
    const defaultOptions = {
      breakpoints: [],
      delay: 300,
      watch: 'width',
      results: [],
      triggerOnInit: false,
    };
    if (isFunction(options)) {
      this.cb = options;
      this.options = defaultOptions;
    } else {
      this.cb = cb;
      if (isArray(options)) {
        defaultOptions.breakpoints = options;
      } else {
        extend(defaultOptions, options);
      }
      this.options = defaultOptions;
    }
    const handler = debounce(() => {
      this.resizeHandler();
    }, this.options.delay);
    window.addEventListener('resize', handler);
    this.stop = () => {
      window.removeEventListener('resize', handler);
    };
    if (this.options.triggerOnInit) {
      this.resizeHandler();
    }
  }

  get() {
    let re;
    this.resizeHandler((result) => {
      re = result;
    });
    return re;
  }

  resizeHandler(cb = this.cb) {
    const {
      innerWidth: width,
      innerHeight: height,
    } = window;
    let watch;
    if (this.options.watch === 'width') {
      watch = width;
    } else if (this.options.watch === 'height') {
      watch = height;
    } else {
      watch = this.options.watch;
    }
    if (this.options.breakpoints.length) {
      const index = sortedIndex(this.options.breakpoints, watch);
      if (isNull(this.temp) || this.temp !== index) {
        if (this.options.results.length) {
          if (!isUndefined(this.options.results[index])) {
            cb(this.options.results[index]);
          }
        } else {
          cb(index);
        }
        this.temp = index;
      }
    } else {
      cb({ width, height });
    }
  }
}

function createInstance(options, cb) {
  return new Resizer(options, cb);
}

const resizer = createInstance;

export default resizer;
