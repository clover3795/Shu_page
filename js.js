var photo1=document.querySelector('.photo1');
console.log(photo1);
function lightboxEffect(){
    showImage(photo1);
    openLightbox();
}
photo1.addEventListener('click',lightboxEffect)