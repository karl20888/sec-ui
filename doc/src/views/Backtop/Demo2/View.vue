<template>
  <div>
    Scroll down to see the bottom-right button.
    <sec-backtop target=".sec-layout-main" :bottom="100">
      <div style="{
        width: 100%;
        height: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0, 0, 0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }">UP</div>
    </sec-backtop>
  </div>
</template>
