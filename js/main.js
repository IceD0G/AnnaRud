const header = document.querySelectorAll('header')
const links = document.querySelectorAll('.header-logo>p,.header-info>ul>li>p')
let disc = document.querySelectorAll('.anna-portfolio-works-ex-disc'),
    layout = document.querySelectorAll('.anna-portfolio-works-ex-layout')

// изменения в шапке при скролле
window.addEventListener('scroll',()=>{
    if (window.matchMedia('(max-width: 768px)').matches) { 
        if (window.scrollY >= 10) {
            header[0].style.background = '#dadada'
            header[0].style.padding = '1em 0'
            for (let index = 0; index < links.length; index++) {
                links[index].style.color = '#000'
                links[1].style.display = 'inline'
            }
        } else {
            header[0].style.background = 'transparent'
            header[0].style.padding = '1em 0'
            for (let index = 0; index < links.length; index++) {
                links[1].style.display = 'none'
                links[index].style.color = '#fff'
            }
        }
    } else{
        for (let i = 0; i < layout.length; i++) {
            layout[i].addEventListener('mouseenter', () => {
                layout[i].style.opacity = '0.6'
                disc[i].style.opacity = '1'
            })
            disc[i].addEventListener('mouseenter', () => {
                layout[i].style.opacity = '0.6'
                disc[i].style.opacity = '1'
            })
        }
        for (let i = 0; i < layout.length; i++) {
            layout[i].addEventListener('mouseleave', () => {
                layout[i].style.opacity = '0'
                disc[i].style.opacity = '0'
            })
            disc[i].addEventListener('mouseleave', () => {
                layout[i].style.opacity = '0'
                disc[i].style.opacity = '0'
            })
        }
         if (window.scrollY >= 10) {
             header[0].style.background = '#dadada'
             header[0].style.padding = '1em 0'
             for (let index = 0; index < links.length; index++) {
                 links[index].style.color = '#000'
                 links[1].style.display = 'inline'
             }
         } else {
             header[0].style.background = 'transparent'
             header[0].style.padding = '2em 0'
             for (let index = 0; index < links.length; index++) {
                 links[1].style.display = 'none'
                 links[index].style.color = '#fff'
             }
         }
    }
   
})


//плавное движение якорных ссылок
const linkToHome = document.querySelector('.header_Home'),
    linkToPortfolio = document.querySelector('.header_Portf'),
    linkToProfile = document.querySelector('.header_Prof'),
    anna_r = document.querySelector('.anna_r'),
    anna_r_stop = anna_r.getBoundingClientRect().height,
    anna_portfolio = document.querySelector('.anna-portfolio'),
    anna_profile_stop = anna_r_stop + anna_portfolio.getBoundingClientRect().height
    


//якорные ссылки
//ссылка на начало документа
linkToHome.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}))    
linkToHome.addEventListener('click', () =>{
    headerMenu.classList.remove('active')
    burger.classList.remove('active')
    document.querySelector('body').classList.remove('lock')
})
//ссылка до портфолио
linkToPortfolio.addEventListener('click', () => window.scrollTo({
    top: anna_r_stop,
    behavior: 'smooth',
}))
linkToPortfolio.addEventListener('click', () => {
    headerMenu.classList.remove('active')
    burger.classList.remove('active')
    document.querySelector('body').classList.remove('lock')
})
linkToProfile.addEventListener('click', () => window.scrollTo({
    top: anna_profile_stop,
    behavior: 'smooth',
}))
linkToProfile.addEventListener('click', () => {
    headerMenu.classList.remove('active')
    burger.classList.remove('active')
    document.querySelector('body').classList.remove('lock')
})


//разворачивание и сворачивание меню бургера
const headerMenu = document.querySelector('.header-info')
const burger = document.querySelector('.burger')

burger.addEventListener('click', () =>{
    headerMenu.classList.toggle('active')
    burger.classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')

})