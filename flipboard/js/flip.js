function lightbox(el){
   console.log("j'ai cliqué sur un article",el);
   console.log(el.querySelector('img').src);
   //on recupere l'adresse de l'image de l'article cliqué
   let imSrc = el.querySelector('img').src;
   let light = document.querySelector('#lightbox');
   console.log(light);
   let lightImg = light.querySelector('img');
   lightImg.src = imgSrc;
   light.classList.toggle('visible');
}