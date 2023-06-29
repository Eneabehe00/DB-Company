let navbar = document.querySelector('#navbar');

window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;

    if (scrolled > 20) {
        navbar.style.height = '70px';
    }
    else {
        navbar.style.height = '80px';
    }
})