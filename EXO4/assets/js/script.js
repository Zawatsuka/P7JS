// on récupére la balise img dans une contanste pour l'utiliser dans la fonction et dans l'event listener
let pict = document.getElementById('JACK');
let pict2 =document.getElementById('jack2')

// fonction fléchée qui scale l'image au click
let scaleImg = () => {
    if (pict.style.width == 'initial') {
        pict.style.width = '50%';
    } else {
        pict.style.width = 'initial';
    };
    if (pict2.style.width == 'initial') {
        pict2.style.width = '50%';
    } else {
        pict2.style.width = 'initial';
    };
}

// listener qui appele la fonction scaleImg
pict.addEventListener('click', scaleImg);