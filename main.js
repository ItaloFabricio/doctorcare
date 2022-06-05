function onScroll() {

    if(scrollY > 0){
        var element = document.getElementById("navigation")
        element.classList.add("scroll")    
    }else{
        var element = document.getElementById("navigation")
        element.classList.remove("scroll")
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}