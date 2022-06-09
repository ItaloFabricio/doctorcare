window.addEventListener('scroll', onScroll)

function onScroll() {
    showNavOnScroll()  
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection(){
    // linha alvo
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seção passou da linha
    // quais dados vou precisar ?

    // o topo da seção
    const sectionTop = home.offsetTop

    // a altura da seção
    const sectionHeight = home.offsetHeight
    
    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // informações dos dados e da lógica
    console.log(
        'O topo da seção chegou ou passou da linha ?',
        sectionTopReachOrPassedTargetLine
    )

    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar ?

    // a seção termina onde ?
    const sectionEndsAt = sectionTop + sectionHeight

    // o final da seção passou da linha alvo   
    const sectionEndPassedTargetLine =  sectionEndAt <= targetLine

    console.log('O fundo da seção passou da linha ?', sectionEndPassedTargetLine)

    // limites da seção
    const sectionBoundaries = 
    sectionTopReachOrPassedTargetLine && 
    !sectionEndPassedTargetLine

    if(sectionBoundaries){
        console.log('estou na seção HOME')
    }

}

function showNavOnScroll(){

    if(scrollY > 0){
        let element = document.getElementById("navigation")
        element.classList.add("scroll")    
    }else{
        let element = document.getElementById("navigation")
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