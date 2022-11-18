<template>
  <div>
    <sec-container>
      <sec-header>Header</sec-header>
      <sec-main>Main</sec-main>
    </sec-container>

    <sec-container>
      <sec-header>Header</sec-header>
      <sec-main>Main</sec-main>
      <sec-footer>Footer</sec-footer>
    </sec-container>

    <sec-container>
      <sec-aside width="200px">Aside</sec-aside>
      <sec-main>Main</sec-main>
    </sec-container>

    <sec-container>
      <sec-header>Header</sec-header>
      <sec-container>
        <sec-aside width="200px">Aside</sec-aside>
        <sec-main>Main</sec-main>
      </sec-container>
    </sec-container>

    <sec-container>
      <sec-header>Header</sec-header>
      <sec-container>
        <sec-aside width="200px">Aside</sec-aside>
        <sec-container>
          <sec-main>Main</sec-main>
          <sec-footer>Footer</sec-footer>
        </sec-container>
      </sec-container>
    </sec-container>

    <sec-container>
      <sec-aside width="200px">Aside</sec-aside>
      <sec-container>
        <sec-header>Header</sec-header>
        <sec-main>Main</sec-main>
      </sec-container>
    </sec-container>

    <sec-container>
      <sec-aside width="200px">Aside</sec-aside>
      <sec-container>
        <sec-header>Header</sec-header>
        <sec-main>Main</sec-main>
        <sec-footer>Footer</sec-footer>
      </sec-container>
    </sec-container>
  </div>
</template>

<style lang="less" scoped>
.sec-header, .sec-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.sec-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.sec-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .sec-container {
  margin-bottom: 40px;
}

.sec-container:nth-child(5) .sec-aside,
.sec-container:nth-child(6) .sec-aside {
  line-height: 260px;
}

.sec-container:nth-child(7) .sec-aside {
  line-height: 320px;
}
</style>
