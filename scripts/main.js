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
// Dark Mode
// let darkModeSetting = localStorage.getItem("darkMode");
// const enableDarkMode = () => {
//     localStorage.setItem('darkMode', 'enabled');
//     body.classList.add('dark--mode');
// }
// const disableDarkMode = () => {
//     localStorage.setItem('darkMode', null);
//     body.classList.remove('dark--mode');
// }
// const themeSwitch = document.querySelector('#theme--switch').addEventListener('click', () => {
//     darkModeSetting = localStorage.getItem("darkMode");
//     if (darkModeSetting !== 'enabled') {
//         enableDarkMode()
//     } else {
//         disableDarkMode()
//     }
// })
// if (darkModeSetting === 'enabled') {
//     enableDarkMode();
// }

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
    speed: 1000,
    loop: true,
    autoplay: true,
    disableOnInteraction: true,
    pagination: false,
    navigation: {
        nextEl: ".swiper-next-port",
        prevEl: ".swiper-prev-port"
    },
});
let swiperPortControls = document.querySelectorAll('.control');
swiperPortControls.forEach(control => {
    control.addEventListener('click', () => {
        document.querySelector('.controller .pressedControl').classList.remove('pressedControl')
        control.classList.add('pressedControl')
    })
})