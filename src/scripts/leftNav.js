// Codes By Mahdi Tasha
// Variables
const left_nav = document.getElementById('left-nav');
const left_nav_close_btn = document.getElementById('left-nav-close-btn');
const left_nav_toggle = document.getElementById('left-nav-toggle');

// A Function That Shows Left Side Nav On Mobile
left_nav_toggle.addEventListener('click', () => {
    left_nav.style.left = '0';
    left_nav.classList.remove('media-781-left-minus-100');
})

// A Function that Hides Left Side Nav On Mobile
left_nav_close_btn.addEventListener('click', () => {
    left_nav.style.left = '-100%';
    left_nav.classList.add('media-781-left-minus-100');
})