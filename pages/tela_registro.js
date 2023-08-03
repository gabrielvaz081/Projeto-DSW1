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

const formularioRegistro = document.querySelector('#formulario_registro')

let objetoValidacao = false
const objetoLabel = document.querySelector('#label_objeto')
const objetoInput = document.querySelector('#objeto')

let localValidacao = false
const localLabel = document.querySelector('#label_local')
const localInput = document.querySelector('#local')

let dataValidacao = false
const dataInput = document.querySelector('#data')

let horaValidacao = false
const horaInput = document.querySelector('#hora')

let pessoaValidacao = false
const pessoaLabel = document.querySelector('#label_pessoa')
const pessoaInput = document.querySelector('#pessoa')

let imagemValidacao = false
const imagemInput = document.querySelector('#imagem')

const registrarButton = document.querySelector('#registrar')

//Validação objeto
objetoInput.addEventListener('keyup', () => {
    if(objetoInput.value.length <=2) {
        objetoLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        objetoLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        objetoValidacao = false
    } else {
        objetoLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
        objetoLabel.innerHTML = 'Objeto:'
        objetoValidacao = true
    }
})

//Validação local
localInput.addEventListener('keyup', () => {
    if(localInput.value.length <=2) {
        localLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        localLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        localValidacao = false
    } else {
        localLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
        localLabel.innerHTML = 'Local:'
        localValidacao = true
    }
})

//Validação data
dataInput.addEventListener('change', function(event) {
    const dataModificada = event.target;
    dataValidacao = true
})

//Validação hora
horaInput.addEventListener('change', function(event) {
    const horaModificada = event.target;
    horaValidacao = true
})

//Validação pessoa
pessoaInput.addEventListener('keyup', () => {
    if(pessoaInput.value.length <=2) {
        pessoaLabel.setAttribute('style', 'color: #f70a0a; font-size: 15px')
        pessoaLabel.innerHTML = 'Insira pelo menos 3 caracteres'
        pessoaValidacao = false
    } else {
        pessoaLabel.setAttribute('style', 'color: #0ae4f0; font-size: 25px')
        pessoaLabel.innerHTML = 'Quem encontrou:'
        pessoaValidacao = true
    }
})

//Validação foto
imagemInput.addEventListener('change', function(event) {
    const fotoModificada = event.target;
    imagemValidacao = true
})

function registrar() {
    if(objetoValidacao && localValidacao && dataValidacao && horaValidacao && pessoaValidacao && imagemValidacao) {
        alert('Registro realizado com sucesso')
    } else {
        alert('Preencha todos os campos corretamente')
    }

    return window.location.href = 'tela_registro.html';
}

registrarButton.addEventListener('click', (event) => {
    event.preventDefault()
    registrar()
})