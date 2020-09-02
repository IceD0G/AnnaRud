const header = document.querySelectorAll('header')
const links = document.querySelectorAll('.header-logo>a,.header-info>ul>li>a')
window.addEventListener('scroll',()=>{
    if (window.scrollY >= 10) {
        header[0].style.background = '#fff'    
        header[0].style.padding = '1em 0'  
        for (let index = 0; index < links.length; index++) {
            links[index].style.color = '#000'
        }  
    } else{
        header[0].style.background = 'transparent' 
        header[0].style.padding = '2em 0'
        for (let index = 0; index < links.length; index++) {
            links[index].style.color = '#fff'
        }  
    } 
})