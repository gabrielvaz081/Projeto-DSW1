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

const formularioLogin = document.querySelector('#formulario_login')
let emailValidacao = false
const emailLabel = document.querySelector('#label_email')
const emailInput = document.querySelector('#email')
let senhaValidacao = false
const senhaLabel = document.querySelector('#label_senha')
const senhaInput = document.querySelector('#senha')
const loginButton = document.querySelector('#login')

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

//Validaçao senha
senhaInput.addEventListener('keyup', () => {
    if(senhaInput.value.length <=2) {
        senhaLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        senhaLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        senhaValidacao = false
    } else {
        if(!senhaDigito(senhaInput.value, 8)) {
            senhaLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
            senhaLabel.innerHTML = 'Senha inválida'
            senhaValidacao = false
        } else {
            senhaLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
            senhaLabel.innerHTML = 'Senha:'
            senhaValidacao = true
        }
    }
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

function logar() {
    if(emailValidacao && senhaValidacao) {
        alert('Login realizado com sucesso')
    } else {
        alert('Por favor, preencha todos os campos corretamente')
    }

    return window.location.href = 'tela_login.html';
}

loginButton.addEventListener('click', (event) => {
    event.preventDefault()
    logar()
})

