class Moncanvas {
    constructor(l, h) {
        this.h = h;
        this.l = l;



        this.element = document.createElement('canvas');
        this.element.width = h;
        this.element.height = l;
        this.context = this.element.getContext("2d");
        document.body.appendChild(this.element);


    }



}

var lecanvas = new Moncanvas(window.innerWidth, window.innerHeight);
console.log("ffff", lecanvas);