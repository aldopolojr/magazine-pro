// HEADER MENU TOGGLE
const menuToggle = document.querySelector('.header__toggle');
const firstNav = document.querySelector('.first-nav');

menuToggle.addEventListener('click', function(){
    firstNav.classList.toggle('closed');
});

// FIRST NAV EXPAND SUBMENU
const subToggle = document.querySelectorAll('.first-nav__sub-toggle');

subToggle.forEach(toggle => toggle.addEventListener('click', function() {
    // check if sub menu is closed
    if (toggle.nextElementSibling.classList.contains('closed')) {
        closeAllSubmenu();
        toggle.childNodes[0].classList.toggle('icon-angle-down');
        toggle.childNodes[0].classList.toggle('icon-angle-up');
        toggle.nextElementSibling.classList.remove('closed');
    } else {
        toggle.childNodes[0].classList.remove('icon-angle-up');
        toggle.childNodes[0].classList.add('icon-angle-down');
        toggle.nextElementSibling.classList.add('closed');
    }
}));

function closeAllSubmenu() {
    subToggle.forEach(toggle => {
        toggle.childNodes[0].classList.remove('icon-angle-up');
        toggle.childNodes[0].classList.add('icon-angle-down');
        toggle.nextElementSibling.classList.add('closed')
    });
}