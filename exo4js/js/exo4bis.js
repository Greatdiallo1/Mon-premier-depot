var myimg = new Image();

myimg.src = "./images/p1.jpg";
document.body.appendChild(myimg);

console.log(myimg);

var b =document.body;
var monimg = b.childNodes [2];
monimg.id ='bb';
document.getElementById('bb').src ="./images/p2.png";