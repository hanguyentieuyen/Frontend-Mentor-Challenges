const form = document.getElementById('form');

form.addEventListener('submit', x => {
    x.preventDefault();
//Kiem tra email co hop le ko ?
    const email = form['email'];
    const emailValue = email.value;

    const small=form.querySelector('small');

    if(!emailValue){
        //empty
        email.classList.add('error');
        small.innerText = "Email field cannot be blank !"
        small.style.display = 'inline-block';

    }else if(!validEmail(emailValue)){
        //invalid
        email.classList('error');
        small.innerText = "Email is invalid !";
        small.style.display = 'inline-block';
    }else{
        //submit
        email.classList.remove('error');
        small.innerText=" ";
        small.style.display = 'none';
    }       
});

function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}