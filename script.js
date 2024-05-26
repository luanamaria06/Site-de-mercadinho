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
  currentSlide = (currentSlide + 1) % slider.length; 
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
    alert('Sem itens no catálogo. Tente novamente mais tarde :D'); 
});

//Segundo carrossel

document.addEventListener('DOMContentLoaded', function() {
    const slideWidth = document.querySelector('.carousel-item').clientWidth; 
    const carouselSlide = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.carousel-item');
    let index = 0;
    const totalSlides = slides.length;
    const visibleSlides = 4; 
    const moveSlides = 2; 
    const maxIndex = totalSlides - visibleSlides; 

    // Botões
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Mover para o próximo slide
    nextBtn.addEventListener('click', () => {
        if (index < maxIndex) {
            index += moveSlides;
            if (index > maxIndex) {
                index = 0; 
            }
        } else {
            index = 0; 
        }
        carouselSlide.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    });

    // Mover para o slide anterior
    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index -= moveSlides;
            if (index < 0) {
                index = maxIndex; 
            }
        } else {
            index = maxIndex; 
        }
        carouselSlide.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Segundo carrossel
    const slideWidth2 = document.querySelector('.carousel-item-2').clientWidth; 
    const carouselSlide2 = document.querySelector('.carousel-slide-2');
    const slides2 = document.querySelectorAll('.carousel-item-2'); 
    let index2 = 0;
    const totalSlides2 = slides2.length;
    const visibleSlides2 = 4; 
    const moveSlides2 = 2; 
    const maxIndex2 = totalSlides2 - visibleSlides2; 

    const prevBtn2 = document.getElementById('prevBtn-2'); 
    const nextBtn2 = document.getElementById('nextBtn-2'); 
    
    nextBtn2.addEventListener('click', () => {
        if (index2 < maxIndex2) {
            index2 += moveSlides2;
            if (index2 > maxIndex2) {
                index2 = 0; 
            }
        } else {
            index2 = 0; 
        }
        carouselSlide2.style.transform = 'translateX(' + (-slideWidth2 * index2) + 'px)';
    });

    prevBtn2.addEventListener('click', () => {
        if (index2 > 0) {
            index2 -= moveSlides2;
            if (index2 < 0) {
                index2 = maxIndex2; 
            }
        } else {
            index2 = maxIndex2; 
        }
        carouselSlide2.style.transform = 'translateX(' + (-slideWidth2 * index2) + 'px)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
   
    const slideWidth3 = document.querySelector('.carousel-item-3').clientWidth;
    const carouselSlide3 = document.querySelector('.carousel-slide-3'); 
    const slides3 = document.querySelectorAll('.carousel-item-3'); 
    let index3 = 0;
    const totalSlides3 = slides3.length;
    const visibleSlides3 = 4; 
    const moveSlides3 = 2; 
    const maxIndex3 = totalSlides3 - visibleSlides3; 
    
    const prevBtn3 = document.getElementById('prevBtn-3'); 
    const nextBtn3 = document.getElementById('nextBtn-3');

    // Mover para o próximo slide do segundo carrossel
    nextBtn3.addEventListener('click', () => {
        if (index3 < maxIndex3) {
            index3 += moveSlides3;
            if (index3 > maxIndex3) {
                index3 = 0; 
            }
        } else {
            index3 = 0; 
        }
        carouselSlide3.style.transform = 'translateX(' + (-slideWidth3 * index3) + 'px)';
    });

    
    prevBtn3.addEventListener('click', () => {
        if (index3 > 0) {
            index3 -= moveSlides3;
            if (index3 < 0) {
                index3 = maxIndex3; 
            }
        } else {
            index3 = maxIndex3; 
        }
        carouselSlide3.style.transform = 'translateX(' + (-slideWidth3 * index3) + 'px)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
   
    const slideWidth4 = document.querySelector('.carousel-item-4').clientWidth; 
    const carouselSlide4 = document.querySelector('.carousel-slide-4'); 
    const slides4 = document.querySelectorAll('.carousel-item-4'); 
    let index4 = 0;
    const totalSlides4 = slides4.length;
    const visibleSlides4 = 4; 
    const moveSlides4 = 2; 
    const maxIndex4 = totalSlides4 - visibleSlides4; 
    
    const prevBtn4 = document.getElementById('prevBtn-4'); 
    const nextBtn4 = document.getElementById('nextBtn-4'); 

    
    nextBtn4.addEventListener('click', () => {
        if (index4 < maxIndex4) {
            index4 += moveSlides4;
            if (index4 > maxIndex4) {
                index4 = 0; 
            }
        } else {
            index4 = 0; 
        }
        carouselSlide4.style.transform = 'translateX(' + (-slideWidth4 * index4) + 'px)';
    });

    
    prevBtn4.addEventListener('click', () => {
        if (index4 > 0) {
            index4 -= moveSlides4;
            if (index4 < 0) {
                index4 = maxIndex4; 
            }
        } else {
            index4 = maxIndex4; 
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
//Suporte
function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    const faqItem = answer.parentElement;
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        faqItem.classList.remove('open');
    } else {
        answer.style.display = 'block';
        faqItem.classList.add('open');
    }
}
