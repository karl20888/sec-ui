<template>
  <div>
    <sec-dropdown split-button type="primary" size="large">
      大型尺寸
      <sec-dropdown-menu>
        <sec-dropdown-item>黄金糕</sec-dropdown-item>
        <sec-dropdown-item>狮子头</sec-dropdown-item>
        <sec-dropdown-item>螺蛳粉</sec-dropdown-item>
        <sec-dropdown-item>双皮奶</sec-dropdown-item>
        <sec-dropdown-item>蚵仔煎</sec-dropdown-item>
      </sec-dropdown-menu>
    </sec-dropdown>
    <sec-dropdown split-button type="primary" size="medium">
      中等尺寸
      <sec-dropdown-menu>
        <sec-dropdown-item>黄金糕</sec-dropdown-item>
        <sec-dropdown-item>狮子头</sec-dropdown-item>
        <sec-dropdown-item>螺蛳粉</sec-dropdown-item>
        <sec-dropdown-item>双皮奶</sec-dropdown-item>
        <sec-dropdown-item>蚵仔煎</sec-dropdown-item>
      </sec-dropdown-menu>
    </sec-dropdown>
    <sec-dropdown split-button type="primary">
      默认尺寸
      <sec-dropdown-menu>
        <sec-dropdown-item>黄金糕</sec-dropdown-item>
        <sec-dropdown-item>狮子头</sec-dropdown-item>
        <sec-dropdown-item>螺蛳粉</sec-dropdown-item>
        <sec-dropdown-item>双皮奶</sec-dropdown-item>
        <sec-dropdown-item>蚵仔煎</sec-dropdown-item>
      </sec-dropdown-menu>
    </sec-dropdown>
    <sec-dropdown split-button type="primary" size="mini">
      超小尺寸
      <sec-dropdown-menu>
        <sec-dropdown-item>黄金糕</sec-dropdown-item>
        <sec-dropdown-item>狮子头</sec-dropdown-item>
        <sec-dropdown-item>螺蛳粉</sec-dropdown-item>
        <sec-dropdown-item>双皮奶</sec-dropdown-item>
        <sec-dropdown-item>蚵仔煎</sec-dropdown-item>
      </sec-dropdown-menu>
    </sec-dropdown>
  </div>
</template>

<style lang="less" scoped>
.sec-dropdown {
  vertical-align: top;

  + .sec-dropdown {
    margin-left: 15px;
  }
}
</style>
