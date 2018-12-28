/*alert("Hello welcome to DOM");
console.log("HeLLO eVERYONE!!!  ");

var myh1=document.QuerySelector("H1");
myh1.style.color("red");
*/
var h1=document.querySelectorAll('h1')
var p=document.querySelectorAll('p')
var h2=document.querySelectorAll('h2')
var h3=document.querySelectorAll('h3')
var ul=document.querySelectorAll('ul')

function getRandomcolor(){
  var letter='0123456789ABCDEF';
  var color ='#';
  for (var i=0; i<6; i++){
    var r = Math.floor(Math.random()*16)
    color = color + letter[r];
  }
  return color;
}
function changecolor(){
  for(h of h1){
  h.style.color=getRandomcolor()
  }
  for(h of h2){
  h.style.color=getRandomcolor()
  }
  for(h of h3){
  h.style.color=getRandomcolor()
  }
  for(p1 of p){
  p1.style.color=getRandomcolor()
  }
  for(u of ul){
  u.style.color=getRandomcolor()
  }
}
setInterval(changecolor,100);
/*
var my = document.QuerySelector('h1')
my.innerHTML = '<a href="www.facebook.com">Login Facebool</a>'*/

/*var h =document.querySelector('a')
undefined
h.getAttribute('href')
"facebbo.com"
h.setAttribute('href','http://www.gmail.com')
undefined*/
