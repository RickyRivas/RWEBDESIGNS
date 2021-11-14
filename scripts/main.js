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
const tabContentCards = document.querySelectorAll('[data-tab-card]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('tab-active'));
        tab.classList.add('tab-active')
        const targets = document.querySelectorAll(tab.dataset.tabTarget);
        tabContentCards.forEach(tabSlide => tabSlide.classList.remove('selected'));
        targets.forEach(target => target.classList.add('selected'));
    })
})
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
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    }
});
var swiper = new Swiper(" .portSwiper", {
    spaceBetween: 20,
    speed: 1500,
    loop: true,
    autoplay: true,
    pagination: false,
    navigation: {
        nextEl: ".swiper-next-port",
        prevEl: ".swiper-prev-port"
    },
});

