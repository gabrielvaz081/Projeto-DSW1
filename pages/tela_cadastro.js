class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

//Conta
const formularioLogin = document.querySelector('#formulario_cadastro')
let nomeValidacao = false
const nomeLabel = document.querySelector('#label_nome')
const nomeInput = document.querySelector('#nome')
let sobrenomeValidacao = false
const sobrenomelabel = document.querySelector('#label_sobrenome')
const sobrenomeInput = document.querySelector('#sobrenome')
let emailValidacao = false
const emailLabel = document.querySelector('#label_email')
const emailInput = document.querySelector('#email')
let senhaValidacao = false
const senhaLabel = document.querySelector('#label_senha')
const senhaInput = document.querySelector('#senha')
let repitaSenhaValidacao = false
const repitaSenhaLabel = document.querySelector('#label_repetir_senha')
const repitaSenhaInput = document.querySelector('#repita_senha')
//Endereço
let logradouroValidacao = false
const logradouroLabel = document.querySelector('#label_logradouro')
const logradouroInput = document.querySelector('#logradouro')
let complementoValidacao = false
const complementoLabel = document.querySelector('#label_complemento')
const complementoInput = document.querySelector('#complemento')
let cidadeValidacao = false
const cidadeLabel = document.querySelector('#label_cidade')
const cidadeInput = document.querySelector('#cidade')
let estadoValidacao = false
const estadoInput = document.querySelector('#estado')
let cepValidacao = false
const cepLabel = document.querySelector('#label_cep')
const cepInput = document.querySelector('#cep')
//Perfil
let fotoValidacao = false
const fotoInput = document.querySelector('#foto')
let nomePerfilValidacao = false
const nomePerfilLabel = document.querySelector('#label_nome_perfil')
const nomePerfilInput = document.querySelector('#nome_perfil')
let telefoneValidacao = false
const telefoneLabel = document.querySelector('#label_telefone')
const telefoneInput = document.querySelector('#telefone')
let radioValidacao = false
const masculinoInput = document.querySelector('#maculino') 
const femininoInput = document.querySelector('#feminino')
const outroInput = document.querySelector('#outro')
const cadastrarButton = document.querySelector('#cadastrar')

//-------------------------Validação Conta---------------------------------

//Validaçao nome
nomeInput.addEventListener('keyup', () => {
    if(nomeInput.value.length <=2) {
        nomeLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        nomeLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        nomeValidacao = false
    } else {
        nomeLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
        nomeLabel.innerHTML = 'Nome:'
        nomeValidacao = true
    }
})

//Validação sobrenome
sobrenomeInput.addEventListener('keyup', () => {
    if(sobrenomeInput.value.length <=2) {
        sobrenomelabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        sobrenomelabel.innerHTML = 'Insira pelo menos 3 caracteres'
        sobrenomeValidacao = false
    } else {
        sobrenomelabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
        sobrenomelabel.innerHTML = 'Sobrenome'
        sobrenomeValidacao = true
    }
})

//Validação email
emailInput.addEventListener('keyup', () => {
    if(emailInput.value.length <=2) {
        emailLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        emailLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        emailValidacao = false
    } else {
        if(!validacaoEmail(emailInput.value)) {
            emailLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
            emailLabel.innerHTML = 'Email inválido'
            emailValidacao = false
        } else {
            emailLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
            emailLabel.innerHTML = 'Email:'
            emailValidacao = true
        }
    }
})

//Validação senha
senhaInput.addEventListener('keyup', () => {
    if(senhaInput.value.length <=2) {
        senhaLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        senhaLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        senhaValidacao = false
    } else {
        if(!senhaDigito(senhaInput.value, 8)) {
            senhaLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
            senhaLabel.innerHTML = 'As senhas informadas são distintas'
            senhaValidacao = false
        } else {
            senhaLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
            senhaLabel.innerHTML = 'Senha:'
            senhaValidacao = true
        }
    }
})

//Validação repetir senha
repitaSenhaInput.addEventListener('keyup', () => {
    if(senhaInput.value != repitaSenhaInput.value) {
        repitaSenhaLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        repitaSenhaLabel.innerHTML = 'As senhas informadas são distintas'
        repitaSenhaValidacao = false
    } else {
        repitaSenhaLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
        repitaSenhaLabel.innerHTML = 'Repita a senha:'
        repitaSenhaValidacao = true
    }
})

//------------------------------Validação Endereço-------------------------------

//Validação logradouro
logradouroInput.addEventListener('keyup', () => {
    if(logradouroInput.value.length <=2) {
        logradouroLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        logradouroLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        logradouroValidacao = false
    } else {
        logradouroLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
        logradouroLabel.innerHTML = 'Logradouro:'
        logradouroValidacao = true
    }
})

//Validação complemento
complementoInput.addEventListener('keyup', () => {
    if(complementoInput.value.length <=2) {
        complementoLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        complementoLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        complementoValidacao = false
    } else {
        complementoLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
        complementoLabel.innerHTML = 'Complemento:'
        complementoValidacao = true
    }
})

//Validação cidade
cidadeInput.addEventListener('keyup', () => {
    if(cidadeInput.value.length <=2) {
        cidadeLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        cidadeLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        cidadeValidacao = false
    } else {
        cidadeLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
        cidadeLabel.innerHTML = 'Cidade:'
        cidadeValidacao = true
    }
})

//Validação estado
estadoInput.addEventListener('click', function() {
    const estadoInputValue = estadoInput.value;

    estadoInput.addEventListener('change', function(event) {
        const estadoModificado = event.target;
        estadoValidacao = true
    })

    if(estadoValidacao) {
        estadoValidacao = true
    }
})

//Validação cep
cepInput.addEventListener('keyup', () => {
    if(cepInput.value.length <=2) {
        cepLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        cepLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        cepValidacao = false
    } else {
        if(!validacaoCep(cepInput.value)) {
            cepLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
            cepLabel.innerHTML = 'CEP inválido'
            cepValidacao = false
        } else {
            cepLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
            cepLabel.innerHTML = 'CEP:'
            cepValidacao = true
        }
    }
})

//---------------------------Validação Perfil--------------------------------

//Validação foto
fotoInput.addEventListener('change', function(event) {
    const fotoModificada = event.target;
    fotoValidacao = true
})


//Validação nome_perfil
nomePerfilInput.addEventListener('keyup', () => {
    if(nomePerfilInput.value.length <=2) {
        nomePerfilLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        nomePerfilLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        nomePerfilValidacao = false
    } else {
        nomePerfilLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
        nomePerfilLabel.innerHTML = 'Nome do perfil:'
        nomePerfilValidacao = true
    }
})

//Validação telefone
telefoneInput.addEventListener('keyup', () => {
    if(telefoneInput.value.length <=2) {
        telefoneLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        telefoneLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        telefoneValidacao = false
    } else {
        if(!validacaoTelefone(telefoneInput.value)) {
            telefoneLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
            telefoneLabel.innerHTML = 'Telefone inválido'
            telefoneValidacao = false
        } else {
            telefoneLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
            telefoneLabel.innerHTML = 'Telefone:'
            telefoneValidacao = true
        }
    }
})

//Validação radio
masculinoInput.addEventListener('click', (event) => {
    const masculinoSelecionado = event.target;
    radioValidacao = true
})

femininoInput.addEventListener('click', (event) => {
    const femininoSelecionado = event.target;
    radioValidacao = true
})

outroInput.addEventListener('click', (event) => {
    const outroSelecionado = event.target;
    radioValidacao = true
})

function cadastrar() {
    if(nomeValidacao && sobrenomeValidacao && emailValidacao && senhaValidacao && repitaSenhaValidacao && logradouroValidacao && complementoValidacao && cidadeValidacao
       && estadoValidacao && cepValidacao && fotoValidacao && nomePerfilValidacao && telefoneValidacao && radioValidacao) {
            alert('Cadastro realizado com sucesso')
        } else {
            alert('Preencha todos os campos corretamente')
        }

    return window.location.href = 'tela_cadastro.html';
}

cadastrarButton.addEventListener('click', (event) => {
    event.preventDefault()
    cadastrar()
})

function validacaoEmail(email) {

    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

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

    const cepRegex = new RegExp(/^\d{2}\d{3}[-]\d{3}$/g);

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

function validacaoTelefone(telefone) {

    const telefoneRgex = new RegExp(/^\(\d{2}\)\s\d{5}-\d{4}$/g);

    if(telefoneRgex.test(telefone)) {
        return true;
    }

    return false;
}








