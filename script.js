const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const searchBarButton = document.querySelector('.search-bar button'); // Armazenar o botão da barra de pesquisa

let currentSlide = 0;

// Esconde todos os slides
const hideSlider = () => slider.forEach(item => item.classList.remove('on'));

// Mostra o slide atual
const showSlider = () => {
  slider[currentSlide].classList.add('on');
};

// Avança para o próximo slide
const nextSlider = () => {
  hideSlider();
  currentSlide = (currentSlide + 1) % slider.length; // Simplifica a lógica para avançar o slide
  showSlider();
};

// Retorna ao slide anterior
const prevSlider = () => {
  hideSlider();
  currentSlide = (currentSlide - 1 + slider.length) % slider.length; // Simplifica a lógica para retornar o slide
  showSlider();
};

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

// Adiciona funcionalidade ao botão da barra de pesquisa
searchBarButton.addEventListener('click', () => {
    alert('Sem itens no catálogo. Tente novamente mais tarde :D'); // Mensagem de placeholder
});

// Novas linhas para o segundo carrossel
const slider2 = document.querySelectorAll('.slider-2'); // Use a classe correta para os slides do segundo carrossel
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

