window.onload = function(){
  // Promise
  var Promise2 = new Promise((resolve,reject) => {
    setTimeout(() => resolve('OK1'), 1000);
  })
  Promise2.then(val => console.log(val));
  console.log(Promise2);
  function ajaxA(a,b,c){
    var Promise1 = new Promise((resolve,reject) => {
      var bool = true; // false
      setTimeout(() => bool ? resolve('OK2') : reject('ERROR'), 1000);
    })
    return Promise1;
  }
  // Promise1.then(
  ajaxA().then(
    val => console.log(val),
    error => console.log(error)
  );
  console.log(ajaxA());
  function ajaxB(){
    return new Promise((resolve,reject) => setTimeout(() => resolve('OK3'),1000));
  }
  function ajaxC(){
    return new Promise((resolve,reject) => setTimeout(() => resolve('OK4'),2000));
  }
  ajaxB().then(val => {
    console.log(val);
    ajaxC(val);
  }).then(val => console.log(val))
  function ajaxD(){
    return new Promise((resolve,reject) => setTimeout(() => {
      let obj = {age:12, email:'12345678@hmail.com'};
      resolve(obj);
    },1000));
  }
  function ajaxE(){
    return new Promise((resolve,reject) => setTimeout(() => {
      let obj = {name:'mike'};
      resolve(obj);
    },2000));
  }
  function Init(a,b){
    return Promise.all([a,b]).then(arr => arr)
  }
  Init(ajaxD(),ajaxE()).then(arr => console.log(arr))
  
  var ajaxTest = new Promise(function(resolve,reject) {
    let render = Math.random() > 0.5;
    resolve(render ? '成功了' : '錯誤了');
  })
  ajaxTest.then(function(res){
    console.log('success => ', res);
  },function(error){
    console.log('error => ', error)
  });

  // function ajax_a() {
  //   return new Promise((resolve,reject) => setTimeout(() => resolve(1),1000))
  // }
  // function ajax_b() {
  //   return new Promise((resolve,reject) => setTimeout(() => resolve(2),2000));
  // }
  // function addInt(A,B) {
  //   return Promise.all([A,B]).then(Arr => return Arr)
  // }
  // addInt(ajax_a(),ajax_b()).then(sum => console.log(sum));
}
function ajax_a() {
  return new Promise((resolve, reject) => setTimeout(() => resolve(1),1000));
}
function ajax_b() {
  return new Promise((resolve, reject) => setTimeout(() => resolve(2),2000));
}
function addInt(A, B) {
  return Promise.all([A, B]).then(Arr => Arr[0]+Arr[1]);
  // return Promise.all([A, B]).then(Arr => {
  //   return Arr[0]+Arr[1];
  // });
}
addInt(ajax_a(),ajax_b()).then((sum) => console.log('sum : '+sum));

// async/ await
  let obj = {}
  const apiWeb1 = 'http://www.mocky.io/v2/5cc3f5723400005d00765480',
        apiWeb2 = 'http://www.mocky.io/v2/5cc3f1c43400007800765473';
  async function renderData(){
    try{
      let res1 = await axios.get(apiWeb1),
          res2 = await axios.get(apiWeb2);
      console.log('res1 : ',res1.data.twzip.city);
      console.log('res2 : ',res2.data.item);
      console.log({res1,res2});
      // console.log(abcdefg);
    }catch(err){ // 只要有錯就會跑到catch來
      console.log('fetch failed', err);
    }
  }
  renderData()

  // function duplicate(arr){
  //   // console.log(arr.concat(arr));
  //   console.log([...arr,...arr]);
  // }
  // duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
