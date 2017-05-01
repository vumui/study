(function(){
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function(){
    var n = Math.random();
    if (n<0.05){
      this.textContent= 'mot';
    }else if (n<0.2) {
      this.textContent= 'hai';
    }else {
      this.textContent= 'ba';
    }
  //  var results =['mot','hai','ba', 'bon', 'nam'];
//  var n =Math.floor(Math.random()*5);
  //var results =['mot','mot','mot','mot','mot','mot','mot','mot','hai','ba', 'bon', 'nam'];
//  var n =Math.floor(Math.random()*results.length);
//
//switch (n) {
//  case 0:
//  this.textContent ='mot';
//   this.textContent ='hai';
//   break;
//   case 2:
//    this.textContent ='ba';
//    break;

//}
//if (n===0){
//  this.textContent='Mot';
//}else if (n===1){
//  this.textContent='hai';
//}else{
//  this.textContent='ba';
//}
//this.textContent=n;
  });
  btn.addEventListener('mousedown', function(){
    this.className='pushed';
  });
  btn.addEventListener('mouseup', function(){
    this.className='';
});
})();
