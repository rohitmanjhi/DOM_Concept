function getrandomColor(){
  var letter='0123456789abcdef';
  var color='#';
  for(var i=0; i<6; i++){
    var r = Math.floor(Math.random()*16)
    color = color+letter[r]
  }
  return color;
}
var b=document.querySelector('button');
b.addEventListener('click',function(){
  var body=document.querySelector('body')
  body.style.background=getrandomColor()
})
