const menuBurger = document.querySelector('.menu_burger');
const span = document.querySelector('.menu_burger__span');

const menu = document.querySelector('.header__nav');
const menuList = document.querySelector('.header__list');
const menuLink = document.querySelectorAll('.header__link');

const body = document.querySelector('.body')

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('open_menu');
    span.classList.toggle('open_menu');
    menu.classList.toggle('open_menu');
    body.classList.add('fixed');

    if (body.classList.contains('fixed')) {
        menu.style.display = `block`;
    } else {
        menu.style.display = `none`;
    }
    
})

function closeMenu() {
    body.classList.remove('fixed');
    menuBurger.classList.remove('open_menu');
    span.classList.remove('open_menu');
    menu.classList.remove('open_menu');
    menu.style.display = `none`;
}

menuLink.forEach((el) => el.addEventListener('click', closeMenu))

