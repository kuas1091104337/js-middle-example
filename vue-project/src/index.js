import Vue from 'vue';
import App from './App';

// new Vue({
//   el: '#app',
//   render: h => h(App),
// });
console.log("hello world!");
const { ref } = Vue;
const App = {
  // 前以vue
  // data(){ return{msg:'hello vue!'} }
  setup(){
    const msg = ref('hello vue!')
    return {
      msg
    };
  }
}
Vue.createApp(App).mount('#app')