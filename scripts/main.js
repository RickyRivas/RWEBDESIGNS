// Navigation 1
const body = document.querySelector('body');
const burger = document.querySelector(".hamburger");
const navOverlay = document.querySelector('.navlinks-overlay');
const nav = document.querySelector(".nav-links");

burger.addEventListener('click', () => {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    body.classList.toggle('body-fixed');
    navOverlay.classList.toggle('is-active');
})
navOverlay.addEventListener('click', () => {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    body.classList.toggle('body-fixed');
    navOverlay.classList.toggle('is-active');
})
// Tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContentSlides = document.querySelectorAll('[data-tab-slide]');
console.log(tabContentSlides.length)

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('tab-active'));
        tab.classList.add('tab-active')
        const targets = document.querySelectorAll(tab.dataset.tabTarget);
        console.log(targets.length)
        tabContentSlides.forEach(tabSlide => tabSlide.classList.remove('selected'));
        targets.forEach(target => target.classList.add('selected'));
    })
})
var swiper = new Swiper(".swiper-container-port", {
    spaceBetween: 10,
    centeredSlides: true,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
    },
});
//Popup Modal
const modalUno = document.querySelector('.modal-uno-base');
const modalTriggerUno = document.querySelector('#modal-trigger-uno');
const closeModalUno = document.querySelector('#close-modal-uno');
const modalUnoOverlay = document.querySelector('.modal-overlay');
// modalUno.style.display = 'none';
body.classList.add('body-fixed');

// modalUnoOverlay.addEventListener('click', () => {
//     modalUno.style.display = 'none';
//     body.classList.remove('body-fixed');
// })
// closeModalUno.addEventListener('click', () => {
//     modalUno.style.display = 'none'
//     body.classList.remove('body-fixed');
// });
// Color theme toggle
// const themeToggle = document.querySelector('.theme-toggle');
// const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme == 'dark') {
//     document.body.classList.toggle('dark-mode')
// }

// themeToggle.addEventListener('click', () => {
//     if (prefersDarkTheme.matches) {
//         document.body.classList.toggle('light-mode')
//         var theme = document.body.classList.contains('light-mode') ? 'light' : 'dark'
//     } else {
//         document.body.classList.toggle('dark-mode');
//         var theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light'
//     }
//     localStorage.setItem('theme', theme)
// })
// Reset text 
// const textInputs = document.querySelectorAll(`.form-control input[type='text']`);
// textInputs.forEach(input => {
//     input.addEventListener('focus', () => {
//         input.value = '';
//     })
// })
var swiper = new Swiper(".landingSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});