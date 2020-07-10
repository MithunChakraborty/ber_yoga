let in_menu = document.getElementById('in-menu');
let nav_menu = document.getElementById('nav-menu');
let header = document.querySelector('header');


in_menu.addEventListener('click', (event) => {
    if (header.className == '') {
        header.className = 'active-menu';
    }
    else {
        header.className = '';
    }
});