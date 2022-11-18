import Login from './src/Login.vue';

Login.install = (Vue) => {
  Vue.component(Login.componentName, Login);
};

export default Login;
