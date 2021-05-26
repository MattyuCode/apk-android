//--------------------Navbar------------------------
$(document).on('click', '.navbar-collapse', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

$(document).on('click', 'li.nav-item', function () {
    $(this).addClass('active').siblings().removeClass('active');
})


//-------------------------------ScrollReveal--------------------

window.sr = ScrollReveal();
sr.reveal('.scrolling-navbar', {
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

sr.reveal('#', {
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

//-------------------------------Letters with animation--------------------

var typed = new Typed(".typing", {
    strings: ['Bienvenidos en Apk-Android'],
    typeSpeed: 150,
    startDelay: 900,
    backSpeed: 120,
    loop: true
});



