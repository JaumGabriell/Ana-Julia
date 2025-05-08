var menuIcon =  document.querySelector('.menu-icon');

var ul = document.querySelector('.ul')

menuIcon.addEventListener('click', ()=> {
    if (ul.classList.contains('active')) {
        ul.classList.remove('active');
        document.querySelector('.menu-icon img').src = 'imgs/menu-icon-18.png';
    }else {
        ul.classList.add('active');
        document.querySelector('.menu-icon img').src = 'imgs/icone-x-verte.png';
    }
})