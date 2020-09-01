const caruselSlide = document.querySelector('.slider-slide')
const caruselImages = document.querySelectorAll('.slider-slide img')
// buttons

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
//Counter

let counter = 1
let size = caruselImages[0].clientWidth

caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

//Button Listenets

nextBtn.addEventListener('click', () => {
    if (counter >= caruselImages.length - 1) return
    caruselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter++
    caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return
    caruselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter--
    caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})
caruselSlide.addEventListener('transitionend', () => {

    if (caruselImages[counter].id === 'lastClone') {
        caruselSlide.style.transition = 'none'
        counter = caruselImages.length - 2
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if (caruselImages[counter].id === 'firstClone') {
        caruselSlide.style.transition = 'none'
        counter = caruselImages.length - counter
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})