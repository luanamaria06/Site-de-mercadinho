//Primeiro carrossel

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

//Segundo carrossel

document.addEventListener('DOMContentLoaded', function() {
    const slideWidth = document.querySelector('.carousel-item').clientWidth; // Largura de um item
    const carouselSlide = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.carousel-item');
    let index = 0;
    const totalSlides = slides.length;
    const visibleSlides = 4; // Número de slides visíveis
    const moveSlides = 2; // Número de slides para mover
    const maxIndex = totalSlides - visibleSlides; // Índice máximo para não exceder o número de slides

    // Botões
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Mover para o próximo slide
    nextBtn.addEventListener('click', () => {
        if (index < maxIndex) {
            index += moveSlides;
            if (index > maxIndex) {
                index = 0; // Volta ao início se exceder o número total de slides
            }
        } else {
            index = 0; // Volta ao início se estiver no último slide visível
        }
        carouselSlide.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    });

    // Mover para o slide anterior
    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index -= moveSlides;
            if (index < 0) {
                index = maxIndex; // Vai para o último conjunto de slides visíveis se o índice for negativo
            }
        } else {
            index = maxIndex; // Vai para o último conjunto de slides visíveis se estiver no primeiro slide
        }
        carouselSlide.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    });
});


//Função do botão de cadastro

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

}
