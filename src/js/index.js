import '../styles/style.less';

const HEADER = document.querySelector('.header');
const MAIN = document.querySelector('main');

let burger = HEADER.querySelector('.top__button');

let onShowMenu = () => {
    let menu = HEADER.querySelector('.menu');
    menu.classList.toggle('menu__toggle--show');
    menu.classList.toggle('menu__toggle--hidden');
    burger.classList.toggle('top__button--close')
}

burger.addEventListener('click', onShowMenu);

let techButton = MAIN.querySelector('.tech__button');

let onRandColor = function(elem) {
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256)),
        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}

let onColorTextRange = function () {
    let techElem = MAIN.querySelectorAll('.tech__element span');
    techElem.forEach((elem) => {
        elem.style.color = onRandColor(elem);
    })
}

techButton.addEventListener('click', onColorTextRange);
