const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

document.querySelector('.search-bar button').addEventListener('click', function() {
    alert('Sem itens no catalogo tente novamente mais tarde :D'); // Esta é uma mensagem de exemplo. Substitua pela funcionalidade real.
});

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
}

