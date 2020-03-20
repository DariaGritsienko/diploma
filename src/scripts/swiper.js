import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm.js';

// Install modules
Swiper.use([Navigation, Pagination]);
export const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 16,
        },
        550: {
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 8,
        }
    }
});

