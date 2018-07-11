class Fruit{
        constructor(src, x, y, h, l){
    // Classe fruit pour dessiner un fruit
    // Export rend cette classe publique, elle peut être importée
     class Fruit{
        constructor(src, x, y, ctx) {
            console.log(this);
             this.x = x;
             this.y = y;
            this.h = h;
            this.l = l;
            this.nom = "fruit";
    
            this.ctx = ctx;
             this.img = new Image();
            this.img.width = this.l;
            this.img.height = this.h;
            /*this.img.onload = ()=>{
                console.log("Contexte du onload", this);
            }*/
            // On utilise une méthode en flat arrow éviter que le onload (asynchrone) n'ait de contexte
            this.img.onload = () => {
                console.log(this, this.ctx);
                this.ctx.drawImage(this.img, this.x, this.y);
            }
             this.img.src = src;
        }
    }
}
}
