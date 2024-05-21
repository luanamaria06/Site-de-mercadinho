const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const searchBarButton = document.querySelector('.search-bar button'); 

let currentSlide = 0;


const hideSlider = () => slider.forEach(item => item.classList.remove('on'));

const showSlider = () => {
  slider[currentSlide].classList.add('on');
};

const nextSlider = () => {
  hideSlider();
  currentSlide = (currentSlide + 1) % slider.length; // Simplifica a lógica para avançar o slide
  showSlider();
};

const prevSlider = () => {
  hideSlider();
  currentSlide = (currentSlide - 1 + slider.length) % slider.length; 
  showSlider();
};

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

searchBarButton.addEventListener('click', () => {
    alert('Sem itens no catálogo. Tente novamente mais tarde :D'); // Mensagem de placeholder
});

//segudo carrossel
const slider2 = document.querySelectorAll('.slider-2'); 
const btnPrev2 = document.getElementById('prev-button-2');
const btnNext2 = document.getElementById('next-button-2');

let currentSlide2 = 0;

const hideSlider2 = () => slider2.forEach(item => item.classList.remove('on'));
const showSlider2 = () => {
  slider2[currentSlide2].classList.add('on');
};

const nextSlider2 = () => {
  hideSlider2();
  currentSlide2 = (currentSlide2 + 1) % slider2.length;
  showSlider2();
};

const prevSlider2 = () => {
  hideSlider2();
  currentSlide2 = (currentSlide2 - 1 + slider2.length) % slider2.length;
  showSlider2();
};

btnNext2.addEventListener('click', nextSlider2);
btnPrev2.addEventListener('click', prevSlider2);
=======
function signup() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cpf = document.getElementById('cpf').value;
    
    if (fullName && email && phone && cpf) {
        document.querySelector('.signup-container').style.display = 'none';
        document.querySelector('.loading-container').style.display = 'flex';
        
        setTimeout(() => {
            alert(`Cadastro realizado! Boas compras`);
            window.location.href = "site_supemercado.html"; 
        }, 3000); // Simula um carregamento de 3 segundos
    } else {
        alert('Por favor, preencha todos os campos.');
    }


function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Login com email: ${email} e senha: ${password}`);
}


