console.log("hello world!");
const { ref } = Vue;
const App = {
  // 前以vue
  // data(){ return{msg:'hello vue!'} }
  setup(){
    // const msg = ref('hello vue!')
    const msg = ref(0),
          handAddInt = () => msg.value++;
    console.log(msg);
    return {
      msg,
      handAddInt
    };
  }
}
Vue.createApp(App).mount('#app')