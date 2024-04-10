function togglemode(){

 const html = document.body
 html.classList.toggle('light')


 //pegar a tag image
 const img=document.querySelector("#profile img")
 
 //substituir a imagem
  
 
 if(html.classList.contains('light')){
//se tiver light mode add a imagem light
img.setAttribute('src', './assets/gato (cópia).png')
} else{
//se tiver sem light mode manter a imagem normal
img.setAttribute('src', './assets/picapausad.png')

}





}