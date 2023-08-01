const formularioLogin = document.querySelector('#formulario_login')
const emaillabel = document.querySelector('#label_email')
const emailInput = document.querySelector('#email')
const senhalabel = document.querySelector('#label_senha')
const senhaInput = document.querySelector('#senha')

formularioLogin.addEventListener('submit', (event) => {

    event.preventDefault(); //Garantir a validação antes de enviar

    //Validação email
    if(emailInput.value === '' || !validacaoEmail(emailInput.value)) {
        alert('Por favor, preencha o campo de email.');
        return;
    }

    //Validação senha
    if(senhaInput.value === '' || !senhaDigito(senhaInput.value, 8)) {
        alert('Por favor, digite uma senha de no mínimo 8 dígitos');
        return;
    }

    formularioLogin.submit();
})

function validacaoEmail(email) {

    const emailRegex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i);

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

function senhaDigito(senha, numDigitos) {

    if(senha.length <= numDigitos) {
        return true;
    }

    return false;
}