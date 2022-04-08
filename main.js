/*Abre e fecha o menu clicando em seus respectivos ícones*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll ('nav ul li')


for (const element of toggle) {
    element.addEventListener(
        'click',
        function () {
            nav.classList.toggle('show')
        }
    )
}

/*Esconder o menu quando clicar em algum link*/
for (const link of links) {
    link.addEventListener(
        'click',
        function () {
            nav.classList.remove('show')
        }
    )
}

//testimonials swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

/*Adicionar sombra ao header quando scrollar a page*/ 

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
    if(window.scrollY >= navHeight) /*quando scroll for maior/igual altura do header*/ {
        header.classList.add('scroll')
    }
    else {
        header.classList.remove('scroll')
    }
}

//button back to top

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
        if (window.scrollY >= 3975) { 
            console.log('ok')
            backToTopButton.classList.add('button-on-footer')
        }
        else {
            backToTopButton.classList.remove('button-on-footer')
        }
    }
    
    else {
        backToTopButton.classList.remove('show')  
    }
}

//Active menu 

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//when scroll

window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})



