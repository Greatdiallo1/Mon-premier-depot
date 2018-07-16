// var maDiv = document.createElement("div");
// var monTitre = document.createElement("h1");
// var monParagraphe = document.createElement("p");
// monTitre.innerText = "Bienvenue !";
// monParagraphe.innerText = "Bienvenue sur mon site ! Plein de lorem ipsum...";
// maDiv.appendChild(monTitre);
// maDiv.appendChild(monParagraphe);
// document.body.appendChild(maDiv);

// var maDiv1 = document.createElement("div");
// var monTitre1 = document.createElement("h1");
// var monParagraphe1 = document.createElement("p");
// monTitre1.innerText = "Chapitre 1 : un chapitre pour débuter";
// monParagraphe1.innerText = "Paragraphe chapitre 1";
// maDiv1.appendChild(monTitre1);
// maDiv1.appendChild(monParagraphe1);
// document.body.appendChild(maDiv1);

// var maDiv3 = document.createElement("div");
// var monTitre3 = document.createElement("h1");
// var monParagraphe3 = document.createElement("p");
// monTitre3.innerText = "Chapitre 2 : un autre chapitre";
// monParagraphe3.innerText = "Paragraphe chapitre 2";
// maDiv3.appendChild(monTitre3);
// maDiv3.appendChild(monParagraphe3);
// document.body.appendChild(maDiv3);

// var maDiv4 = document.createElement("div");
// var monTitre4 = document.createElement("h1");
// var monParagraphe4 = document.createElement("p");
// monTitre4.innerText = "Chapitre 3 : encore un chapitre";
// monParagraphe4.innerText = "Paragraphe chapitre 3";
// maDiv4.appendChild(monTitre4);
// maDiv4.appendChild(monParagraphe4);
// document.body.appendChild(maDiv4);

chapitre("Bienvenue !", "Bienvenue sur mon site ! Plein de lorem ipsum...");
chapitre("chapitre 1: encore un chapitre","pargraphe chapitre 1");
chapitre("chapitre 2: encore un chapitre","pargraphe chapitre 2");
chapitre("chapitre 3: encore un chapitre","pargraphe chapitre 3");
 chapitre("chapitre 5:  chapitre créé avec ma fonction", "Paragraphe chapitre function");
        // document.body.appendChild(maDiv5)


 function chapitre(titre,text){
 let maDiv = document.createElement("div");
 let monTitre = document.createElement("h1");
 let monParagraphe = document.createElement("p");
 monTitre.innerText = titre;
 monParagraphe.innerText = text;
 maDiv.appendChild(monTitre);
 maDiv.appendChild(monParagraphe);
 document.body.appendChild(maDiv);


     // return maDiv;
  }

  class Chapitre{
      constructor(titre,texte){
          this.titre = titre;
          this.text = texte;


     }

     afficher() {
            let maDiv = document.createElement("div");
            let monTitre = document.createElement("h1");
            let monParagraphe = document.createElement("p");
            monTitre.innerText = this.titre;
            monParagraphe.innerText = this.text;
            maDiv.appendChild(monTitre);
            maDiv.appendChild(monParagraphe);
            document.body.appendChild(maDiv);
     }
  }
  var ch6 = new Chapitre("Chapitre 5","Chapitre créé avec la class Chapitre");
      console.log(ch6)
      ch6.afficher();

