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


document.addEventListener('DOMContentLoaded', function() {
    // Segundo carrossel
    const slideWidth2 = document.querySelector('.carousel-item-2').clientWidth; // Largura de um item do segundo carrossel
    const carouselSlide2 = document.querySelector('.carousel-slide-2'); // Seletor do segundo carrossel
    const slides2 = document.querySelectorAll('.carousel-item-2'); // Itens do segundo carrossel
    let index2 = 0;
    const totalSlides2 = slides2.length;
    const visibleSlides2 = 4; // Número de slides visíveis no segundo carrossel
    const moveSlides2 = 2; // Número de slides para mover no segundo carrossel
    const maxIndex2 = totalSlides2 - visibleSlides2; // Índice máximo para o segundo carrossel

    // Botões do segundo carrossel
    const prevBtn2 = document.getElementById('prevBtn-2'); // Botão de navegação anterior do segundo carrossel
    const nextBtn2 = document.getElementById('nextBtn-2'); // Botão de navegação seguinte do segundo carrossel

    // Mover para o próximo slide do segundo carrossel
    nextBtn2.addEventListener('click', () => {
        if (index2 < maxIndex2) {
            index2 += moveSlides2;
            if (index2 > maxIndex2) {
                index2 = 0; // Volta ao início se exceder o número total de slides
            }
        } else {
            index2 = 0; // Volta ao início se estiver no último slide visível
        }
        carouselSlide2.style.transform = 'translateX(' + (-slideWidth2 * index2) + 'px)';
    });

    // Mover para o slide anterior do segundo carrossel
    prevBtn2.addEventListener('click', () => {
        if (index2 > 0) {
            index2 -= moveSlides2;
            if (index2 < 0) {
                index2 = maxIndex2; // Vai para o último conjunto de slides visíveis se o índice for negativo
            }
        } else {
            index2 = maxIndex2; // Vai para o último conjunto de slides visíveis se estiver no primeiro slide
        }
        carouselSlide2.style.transform = 'translateX(' + (-slideWidth2 * index2) + 'px)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Segundo carrossel
    const slideWidth3 = document.querySelector('.carousel-item-3').clientWidth; // Largura de um item do segundo carrossel
    const carouselSlide3 = document.querySelector('.carousel-slide-3'); // Seletor do segundo carrossel
    const slides3 = document.querySelectorAll('.carousel-item-3'); // Itens do segundo carrossel
    let index3 = 0;
    const totalSlides3 = slides3.length;
    const visibleSlides3 = 4; // Número de slides visíveis no segundo carrossel
    const moveSlides3 = 2; // Número de slides para mover no segundo carrossel
    const maxIndex3 = totalSlides3 - visibleSlides3; // Índice máximo para o segundo carrossel

    // Botões do segundo carrossel
    const prevBtn3 = document.getElementById('prevBtn-3'); // Botão de navegação anterior do segundo carrossel
    const nextBtn3 = document.getElementById('nextBtn-3'); // Botão de navegação seguinte do segundo carrossel

    // Mover para o próximo slide do segundo carrossel
    nextBtn3.addEventListener('click', () => {
        if (index3 < maxIndex3) {
            index3 += moveSlides3;
            if (index3 > maxIndex3) {
                index3 = 0; // Volta ao início se exceder o número total de slides
            }
        } else {
            index3 = 0; // Volta ao início se estiver no último slide visível
        }
        carouselSlide3.style.transform = 'translateX(' + (-slideWidth3 * index3) + 'px)';
    });

    // Mover para o slide anterior do segundo carrossel
    prevBtn3.addEventListener('click', () => {
        if (index3 > 0) {
            index3 -= moveSlides3;
            if (index3 < 0) {
                index3 = maxIndex3; // Vai para o último conjunto de slides visíveis se o índice for negativo
            }
        } else {
            index3 = maxIndex3; // Vai para o último conjunto de slides visíveis se estiver no primeiro slide
        }
        carouselSlide3.style.transform = 'translateX(' + (-slideWidth3 * index3) + 'px)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Segundo carrossel
    const slideWidth4 = document.querySelector('.carousel-item-4').clientWidth; // Largura de um item do segundo carrossel
    const carouselSlide4 = document.querySelector('.carousel-slide-4'); // Seletor do segundo carrossel
    const slides4 = document.querySelectorAll('.carousel-item-4'); // Itens do segundo carrossel
    let index4 = 0;
    const totalSlides4 = slides4.length;
    const visibleSlides4 = 4; // Número de slides visíveis no segundo carrossel
    const moveSlides4 = 2; // Número de slides para mover no segundo carrossel
    const maxIndex4 = totalSlides4 - visibleSlides4; // Índice máximo para o segundo carrossel

    // Botões do segundo carrossel
    const prevBtn4 = document.getElementById('prevBtn-4'); // Botão de navegação anterior do segundo carrossel
    const nextBtn4 = document.getElementById('nextBtn-4'); // Botão de navegação seguinte do segundo carrossel

    // Mover para o próximo slide do segundo carrossel
    nextBtn4.addEventListener('click', () => {
        if (index4 < maxIndex4) {
            index4 += moveSlides4;
            if (index4 > maxIndex4) {
                index4 = 0; // Volta ao início se exceder o número total de slides
            }
        } else {
            index4 = 0; // Volta ao início se estiver no último slide visível
        }
        carouselSlide4.style.transform = 'translateX(' + (-slideWidth4 * index4) + 'px)';
    });

    // Mover para o slide anterior do segundo carrossel
    prevBtn4.addEventListener('click', () => {
        if (index4 > 0) {
            index4 -= moveSlides4;
            if (index4 < 0) {
                index4 = maxIndex4; // Vai para o último conjunto de slides visíveis se o índice for negativo
            }
        } else {
            index4 = maxIndex4; // Vai para o último conjunto de slides visíveis se estiver no primeiro slide
        }
        carouselSlide4.style.transform = 'translateX(' + (-slideWidth4 * index4) + 'px)';
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
