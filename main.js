window.addEventListener('scroll', onScroll)

function onScroll() {
    showNavOnScroll()  
    showBackToTopButtonOnScroll()
}

function showNavOnScroll(){

    if(scrollY > 0){
        var element = document.getElementById("navigation")
        element.classList.add("scroll")    
    }else{
        var element = document.getElementById("navigation")
        element.classList.remove("scroll")
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 550){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}


ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 900,
}).reveal(`#home,
 #home img, 
 #home .stats, 
 #services,
 #services header,
 #services .card
 #about,
 #about header,
 #about .content`);