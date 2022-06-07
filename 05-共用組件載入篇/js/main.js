window.onload = function(){

  // s-3
  function headerRender(){
    return axios.get('./components/header.html');
  }
  function footerRender(){
    return axios.get('./components/footer.html');
  }
  Promise.all([headerRender(),footerRender()]).then(function(ress){
    const header = ress[0].data, footer = ress[1].data;
    document.getElementById('header').innerHTML = header;
    document.getElementById('footer').innerHTML = footer;
  });
  // console.log(ress); console.log(header); console.log(footer);
  // s-2
  // function headerRender(){
  //   return axios.get('./components/header.html')
  // }
  // function footerRender(){
  //   return axios.get('./components/footer.html')
  // }
  // // spread方法用來回call，all裡面的資料
  // axios.all([headerRender(),footerRender()]).then(axios.spread(function(header,footer){
  //   document.getElementById('header').innerHTML = header.data;
  //   document.getElementById('footer').innerHTML = footer.data;
  // }));
  // console.log(header.data, footer.data);
  // s-1
  // axios.get('./components/header.html') .then(function(res){
  //   document.getElementById('header').innerHTML = res.data
  // }).catch(function(error){ console.error(error); });
  // axios.get('./components/footer.html') .then(function(res){
  //   document.getElementById('footer').innerHTML = res.data
  // }).catch(function(error){ console.error(error); });

  function add(){
    let i = 0;
    // return () => return i++;
    return function(){
      return i++;
    }
  }
  const addfn = add();
  // add()()
  console.log(addfn()); // 1
  console.log(addfn()); // 2
  console.log(addfn()); // 3
  console.log(addfn()); // 4
  console.log(addfn()); // 5

  var arrAP = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
  function sliceArr(val=[],idx=0){
    let dbArr = [];
    for (var i=0, max=val.length; i<max; i+=idx) {
      dbArr.push(val.slice(i,i+idx))
    }
    return dbArr;
  }
  console.log(sliceArr(arrAP,3));

  Array.prototype.arrTripleArr = function(val){
    let newArr = [];
    for (var i=0, max=this.length; i<max; i+=val) {
      newArr.push(this.slice(i,i+val))
    }
    return newArr;
  }
  // Array.prototype.arrTripleSplit = function(val){
  //   let arr = [...this], newArr = [];
  //   for (var i=0, max=arr.length; i<max; i+=val) {
  //     newArr.push(arr.slice(i,i+val))
  //   }
  //   return newArr;
  // }
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
  let ag = arr.arrTripleArr(3);
  console.log('ag : ',ag);
  // [["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p"]]
  // typeof 123
  
}
const isMobile = navigator.userAgentData.mobile;
const navi_user = navigator.userAgent.toUpperCase();
if(navi_user.indexOf("MSIE") != -1){
  console.log('IE');
}else if(navi_user.indexOf("EDG/") != -1){
  console.log('Edge');
}else if(navi_user.indexOf("OPR/") != -1){  // Opera
  console.log('Opera');
}else if(navi_user.indexOf("CHROME") != -1){
  console.log('Chrome');
}else if(navi_user.indexOf("FIREFOX") != -1){
  console.log('Firefox');
}else if(navi_user.indexOf("SAFARI") != -1){
  console.log('Safari');
}
