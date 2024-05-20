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