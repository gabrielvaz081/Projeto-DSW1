const formularioRegistro = document.querySelector('#formulario_registro')
const objetoInput = document.querySelector('#objeto')
const localInput = document.querySelector('#local')
const dataInput = document.querySelector('#data')
const horaInput = document.querySelector('#hora')
const pessoaInput = document.querySelector('#pessoa')

formularioLogin.addEventListener('submit', (event) => {

    event.preventDefault(); //Garantir a validação antes de enviar

    //Validação objeto
    if(objetoInput.value === '') {
        alert('Por favor, preencha o campo de objeto.');
        return;
    } 
    
    //Validação local
    if(localInput.value === '') {
        alert('Por favor, preencha o campo de local.');
        return;
    }

    //Validação pessoa
    if(pessoaInput.value === '') {
        alert('Por favor, preencha o campo de pessoa.')
    }

    formularioLogin.submit();
})