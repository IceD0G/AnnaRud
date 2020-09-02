const header = document.querySelectorAll('header')
const links = document.querySelectorAll('.header-logo>p,.header-info>ul>li>p')
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


const linkToHome = document.querySelector('.header_Home')
const linkToPortfolio = document.querySelector('.header_Portf')
const linkToProfile = document.querySelector('.header_Prof')

linkToHome.addEventListener('click', () => {
    window.scrollTo(0, 0)
}) 
linkToPortfolio.addEventListener('click', () => {
    window.scrollTo(0, 880)
}) 
linkToProfile.addEventListener('click', () => {
    window.scrollTo(0, 2300)
})    
console.log(window.scrollY)