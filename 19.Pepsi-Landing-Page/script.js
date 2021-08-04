function imgSlider(a){
    document.querySelector('.imgPepsi').src = a;
}

function changeColor(color){
    const colorBg = document.querySelector('section');
    colorBg.style.background = color;
}
function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const menu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
    menu.classList.toggle('active');
}