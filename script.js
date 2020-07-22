/* GAMBURGER MENU OPEN/CLOSE */

var link = document.querySelector('.m-menu-gamburger');
var closeMenu = document.querySelector('.close-menu');
var menu = document.querySelector('.m-menu');

link.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.add('m-menu__active');
});

closeMenu.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.remove('m-menu__active');
});

/* FORM REGISTRATION OPEN/CLOSE */

var forms = document.querySelectorAll('.form-btn');
var registration = document.querySelector('.registration');
var close = document.querySelector('.close-item');

forms.forEach(function(form) {
    form.addEventListener('click', function(event) {
        event.preventDefault();
        registration.classList.add('registration__active');
    });
    
    close.addEventListener('click', function(event) {
        event.preventDefault();
        registration.classList.remove('registration__active');
    });
});


/* JQUERY */

/* $(function() {
    var link = $('.m-menu-gamburger');
    var close = $('.close-menu');
    var menu = $('.m-menu');
    
    link.on('click', function (e) {
        e.preventDefault();
        menu.toggleClass('m-menu__active');
    });

    close.on('click', function (e) {
        e.preventDefault();
        menu.toggleClass('m-menu__active');
    });
})*/

/* $(function() {
    var form = $('.form-btn');
    var registration = $('.registration');
    var close = $('.close-item');
    
    form.on('click', function (e) {
        e.preventDefault();
        registration.toggleClass('registration__active');
    });

    close.on('click', function (e) {
        e.preventDefault();
        registration.toggleClass('registration__active');
});*/ 