document.getElementById('loginBtn').addEventListener('click', function(){
    const email = document.getElementById('mail');
    const emailValue = email.value;

    const password = document.getElementById('pass');
    const passwordValue = password.value;

    if(emailValue === 'nahid@gmail.com' && passwordValue === 'takade'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Vhag Shala Vhul Password Dos..');
    }
});