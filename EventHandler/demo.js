function getrandomColor(){
  var letter='0123456789abcdef';
  var color='#';
  for(var i=0; i<6; i++){
    var r = Math.floor(Math.random()*16)
    color = color+letter[r]
  }
  return color;
}

function getrandomName(){
  var names=['Hyderaba','Delhi','Mumbai','M.P.','U.P.','Maharastra','Punjab']
  var r = Math.floor(Math.random()*7)
  return names[r]
}
var myh1 = document.querySelector('h1');
function changeColor(){
  myh1.style.color=getrandomColor();
  myh1.textContent=getrandomName();

  }
//  myh1.addEventListener('dblclick',changeColor);
  myh1.addEventListener('mouseover',changeColor);
  myh1.addEventListener('mouseout',changeColor);
