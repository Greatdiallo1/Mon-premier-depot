
function dessiner() {
    var canevas = document.getElementById('canevas');
    if (canevas.getContext) {
      var ctx = canevas.getContext('2d');
  
      // Triangle plein
      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(105, 25);
      ctx.lineTo(25, 105);
      ctx.fill();
  
      // Triangle filaire
      ctx.beginPath();
      ctx.moveTo(125, 125);
      ctx.lineTo(125, 45);
      ctx.lineTo(45, 125);
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);

//cercle
    ctx.moveTo(220, 60);
   ctx.arc(170, 60, 50, 0, 2 * Math.PI);
   
  

//rectangle
   ctx.rect(10, 10, 100,100);


      ctx.closePath();
      ctx.stroke();
    }
  }
