const header = document.querySelectorAll('header')
const links = document.querySelectorAll('.header-logo>p,.header-info>ul>li>p')
const linkToHome = document.querySelector('.header_Home')
const linkToPortfolio = document.querySelector('.header_Portf')
const linkToProfile = document.querySelector('.header_Prof')

// изменения в шапке при скролле
window.addEventListener('scroll',()=>{
    if (window.scrollY >= 10) {
        header[0].style.background = '#fff'    
        header[0].style.padding = '1em 0'  
        for (let index = 0; index < links.length; index++) {
            links[index].style.color = '#000'
            links[1].style.display = 'inline'
        }  
    } else{
        header[0].style.background = 'transparent' 
        header[0].style.padding = '2em 0'
        for (let index = 0; index < links.length; index++) {
            links[1].style.display = 'none'
            links[index].style.color = '#fff'
        }  
    } 
})
// console.log(links)
const anna_r = document.querySelector('.anna_r'),
    anna_r_stop = anna_r.getBoundingClientRect().height,
    anna_portfolio = document.querySelector('.anna-portfolio'),
    anna_profile_stop = anna_r_stop + anna_portfolio.getBoundingClientRect().height
    


//якорные ссылки

//ссылка на начало документа
linkToHome.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}))
//ссылка до портфолио
linkToPortfolio.addEventListener('click', () => window.scrollTo({
    top: anna_r_stop,
    behavior: 'smooth',
}))
linkToProfile.addEventListener('click', () => window.scrollTo({
    top: anna_profile_stop,
    behavior: 'smooth',
}))

console.log(anna_profile_stop)