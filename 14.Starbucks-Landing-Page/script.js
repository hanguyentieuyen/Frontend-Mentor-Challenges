function imgSlider(a){
    document.querySelector('.starbucks').src = a;
}

function changeCircleColor(color){
    const colorCircle = document.querySelector('.circle');
    colorCircle.style.background = color;
}
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var nav = document.querySelector('.nav');
    //
    menuToggle.classList.toggle('active'); 
    nav.classList.toggle('active');
}