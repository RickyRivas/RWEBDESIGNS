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
    parallax: true,
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


const tabLinks = document.querySelectorAll('#tab-link');
// const tabContents = document.querySelectorAll('#tabcontent');

// tabContents.forEach(tabContent => {
//     if (tabContent.classList.contains('active-content')){
//         tabContent.style.display = 'block';
//      }
// })

// const activateTab = (tabLink) => {
//     tabLink.classList.toggle('tabActive');
// }

const deactivateTab = () => {
    tabLinks.forEach(tabLink => {
        tabLink.classList.remove('tabActive')
    })
}

// tabLinks.forEach(tabLink => {
//     tabLink.addEventListener('click', () => {
//         deactivateTab();
//         activateTab(tabLink);
//         showTabContent(tabLink)
//     })
// })

// const showTabContent = (tabLink) => {
//     const tabLinkIndex = tabLink;
//     if (tabLinkIndex.classList.contains('tabActive') && tabLinkIndex == tabLinks[0]) {
//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('active-content')
//         })
//         tabContents[0].classList.add('active-content');
//     } else if (tabLinkIndex.classList.contains('tabActive') && tabLinkIndex == tabLinks[1]) {
//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('active-content')
//         })
//         tabContents[1].classList.add('active-content')
//     } else if (tabLinkIndex.classList.contains('tabActive') && tabLinkIndex == tabLinks[2]) {
//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('active-content')
//         })
//         tabContents[2].classList.add('active-content')
//     } else if (tabLinkIndex.classList.contains('tabActive') && tabLinkIndex == tabLinks[3]) {
//          tabContents.forEach(tabContent => {
//             tabContent.classList.remove('active-content')
//         })
//         tabContents[3].classList.add('active-content')
//     }
// }

// Updated 
// all, 5p, lp, custom
const portCards = document.querySelectorAll('.port-card');

const allTab = document.querySelector('.link-1 span');
const cardsWithAllTag = document.querySelectorAll('.all');
allTab.textContent = `(${cardsWithAllTag.length})`

const landTab = document.querySelector('.link-2 span');
const cardsWithLandTag = document.querySelectorAll('.lp');
landTab.textContent = ` (${cardsWithLandTag.length}) `

const fiveTab = document.querySelector('.link-3 span');
const cardsWithFiveTag = document.querySelectorAll('.five');
fiveTab.textContent = `(${cardsWithFiveTag.length})`;

const customTab = document.querySelector('.link-4 span');
const cardsWithCustomTag = document.querySelectorAll('.custom');
customTab.textContent = `(${cardsWithCustomTag.length})`

const sortItems = () => {
    tabLinks.forEach(tabLink => {

        tabLink.addEventListener('click', () => {
            const currentlyActiveTag = document.querySelector('.tabActive');
            currentlyActiveTag.classList.toggle('tabActive');
            tabLink.classList.toggle('tabActive');
            if (tabLink == tabLinks[0]) {
                cardsWithAllTag.forEach(card => {
                    card.style.display = 'block';
                });
                portCards.forEach(link => {
                    if (!link.classList.contains('all')) {
                        link.style.display = 'none';
                    }
                })
            }
            else if(tabLink == tabLinks[1]) {
                cardsWithLandTag.forEach(card => {
                    card.style.display = 'block';
                })
                portCards.forEach(link => {
                    if (!link.classList.contains('lp')) {
                        link.style.display = 'none';
                    }
                })
            }
            else if (tabLink == tabLinks[2]) {
                cardsWithFiveTag.forEach(card => {
                    card.style.display = 'block'
                });
                portCards.forEach(card => {
                    if (!card.classList.contains('five')) {
                        card.style.display = 'none';
                    }
                })
            }
            else if (tabLink == tabLinks[3]) {
                cardsWithCustomTag.forEach(card => {
                    card.style.display = 'block';
                })
                portCards.forEach(card => {
                    if (!card.classList.contains('custom')) {
                        card.style.display = 'none'
                    }
                })
            }
        })
    })
}
sortItems();