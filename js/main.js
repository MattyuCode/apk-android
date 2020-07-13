//--------------------Navbar------------------------
$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') ) {
         $(this).collapse('hide');
    }
})


//-------------------------------ScrollReveal--------------------

window.sr = ScrollReveal();
sr.reveal('.scrolling-navbar',{
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.w-100', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.fa-chevron-down', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
});

sr.reveal('.card', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});