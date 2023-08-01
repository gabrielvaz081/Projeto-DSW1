//Conta
const formularioLogin = document.querySelector('#formulario_cadastro')
const nomeInput = document.querySelector('#nome')
const sobrenomeInput = document.querySelector('#sobrenome')
const emailInput = document.querySelector('#email')
const senhaInput = document.querySelector('#senha')
const repitaSenhaInput = document.querySelector('#repita_senha')
//Endereço
const logradouroInput = document.querySelector('#logradouro')
const complementoInput = document.querySelector('#complemento')
const cidadeInput = document.querySelector('#cidade')
const estadoInput = document.querySelector('#estado')
const cepInput = document.querySelector('#cep')
//Perfil
const nomePerfilInput = document.querySelector('#nome_perfil')
const telefoneInput = document.querySelector('#telefone')
const masculinoInput = document.querySelector('#maculino')
const femininoInput = document.querySelector('#feminino')
const outroInput = document.querySelector('#outro')

formularioLogin.addEventListener('submit', (event) => {

    event.preventDefault(); //Garantir a validação antes de enviar

    //---------------------Validação Conta------------------------
    
    //Validação nome
    if(nomeInput.value === '') {
        alert('Por favor, preencha o campo de nome.');
        return;
    }
    
    //Validação sobrenome
    if(sobrenomeInput.value === '') {
        alert('Por favor, preencha o campo de sobrenome.');
        return;
    }
    
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

    //Validação do repita a senha
    if(repitaSenhaInput.value === '') {
        alert('Por favor, digite uma senha de no mínimo 8 dígitos');
        return;
    } 
    
    if(repitaSenhaInput.value !== senhaInput.value) {
        alert('A senha informada não é igual a do campo senha');
        return;
    }
    
    //---------------------------Validação Endereço-------------------------------

    //Validação logradouro
    if(logradouroInput.value === '') {
        alert('Por favor, preencha o campo de logradouro.');
        return;
    }

    //Validação complemento
    if(complementoInput.value === '') {
        alert('Por favor, preencha o campo de complemento.');
        return;
    }

    //Validação cidade
    if(cidadeInput.value === '') {
        alert('Por favor, preencha o campo de cidade.');
        return;
    }

    //Validação cep
    if(cepInput.value === '' || !validacaoRegex(cepInput.value) || !cepDigito(cepInput.value, 8)) {
        alert('Por favor, preencha o campo de cep.');
        return;
    }

    //--------------------------Validação perfil-----------------------------

    //Validação nome_perfil
    if(nomePerfilInput.value === '') {
        alert('Por favor, preencha o campo de nome_perfil.');
        return;
    }

    //Validação telefone
    if(telefoneInput.value === '') {
        alert('Por favor, preencha o campo de nome.');
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

function validacaoCep(cep) {

    const cepRegex = new RegExp(/^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/);

    if(cepRegex.test(cep)) {
        return true;
    }

    return false;
}

function cepDigito(cep, numDigitos) {

    if(cep.length <= numDigitos) {
        return true;
    }

    return false;
}

