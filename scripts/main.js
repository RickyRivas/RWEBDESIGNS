const body = document.querySelector('body');
const burger = document.querySelector(".hamburger");
const navOverlay = document.querySelector('.navlinks-overlay');
const nav = document.querySelector(".nav-links");

nav.addEventListener('click', e => {
  if (e.target instanceof HTMLAnchorElement) {
    if (screen.width >= 1024) {
      return
    } else {
      toggleEverything()
    }
  }
})


const toggleEverything = () => {
  nav.classList.toggle('is-active');
  burger.classList.toggle('is-active');
  body.classList.toggle('body-fixed')
  navOverlay.classList.toggle('is-active');
}
burger.addEventListener('click', toggleEverything)
navOverlay.addEventListener('click', toggleEverything)
const sTTB2 = document.querySelector('#js-top-2');
const header = document.querySelector('header')

const scrollFunc = () => {
  let y = window.scrollY;
  if (y > 0) {
    sTTB2.className = "top-link show";
    // header.classList.add('scroll-fixed')
  } else {
    sTTB2.className = "top-link hide";
    // header.classList.remove('scroll-fixed')
  }

};
window.addEventListener("scroll", scrollFunc);


var swiper = new Swiper(" .portSwiper", {
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  autoplay: false,
  slidesPerView: 'auto',
  disableOnInteraction: true,
  centeredSlides: true,
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