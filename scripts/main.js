
const body = document.querySelector('body');
const burger = document.querySelector(".hamburger");
const navOverlay = document.querySelector('.navlinks-overlay');
const nav = document.querySelector(".nav-links");
const toggleEverything = () => {
  nav.classList.toggle('is-active');
  burger.classList.toggle('is-active');
  body.classList.toggle('body-fixed');
  navOverlay.classList.toggle('is-active');
}
burger.addEventListener('click', toggleEverything)
navOverlay.addEventListener('click', toggleEverything)
const scrollToTopButton = document.getElementById("js-top");
const sTTB2 = document.querySelector('#js-top-2')
const scrollFunc = () => {
  let y = window.scrollY;
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
    sTTB2.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
    sTTB2.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};

scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};

var swiper = new Swiper(" .portSwiper", {
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  autoplay: true,
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