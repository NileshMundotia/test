const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,   // Show 4 cards at once
    spaceBetween: 30,   // Space between the cards
    loop: true,         // Enable continuous loop
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,   // On smaller screens, show 1 card at a time
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,   // On medium screens, show 2 cards at a time
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,   // On larger screens, show 4 cards
            spaceBetween: 40,
        },
    },
});
