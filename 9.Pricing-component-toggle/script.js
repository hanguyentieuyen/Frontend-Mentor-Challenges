const toggle = document.getElementById('toggle');
const allBoxs = document.getElementById('allBoxs');

toggle.addEventListener('change', e =>{
    allBoxs.classList.toggle('show-monthly');
})