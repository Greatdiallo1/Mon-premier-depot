var my = document.createElement("p");
document.body.appendChild(my);
var monP = document.querySelector('p');
var myText = document.createTextNode("hufdugorgjdjfgjfdjfdhjgfhjj");
monP.appendChild(myText);

myText = document.querySelector('p').style.color = "red";

myText = document.querySelector('p').style.margin = "100px";

//ici pour deuxieme paragrphe
var m = document.createElement("p");
document.body.appendChild(m);
var mp = document.querySelectorAll("p")[1];
var text = document.createTextNode("helooooooooooooooowww");
mp.appendChild(text);

text=document.querySelectorAll("p")[1];
text.style.color = "blue";
text.style.margin = "100px";



