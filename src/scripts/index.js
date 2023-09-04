import gsap from 'gsap';
import { sliders } from './slider';
import SplitType from 'split-type';

const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__nav');

if (burger) {
    burger.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
        burger.classList.toggle('active');
        document.body.classList.toggle('lock');
    });
}

sliders();

if (document.querySelector('.slider-gallery__body')) {
    new Swiper('.slider-gallery__body', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1.3,
        speed: 800,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            480: {
                slidesPerView: 1.8,
            },
        },
    });
}

if (document.querySelector('.slider-news__body')) {
    new Swiper('.slider-news__body', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 800,
        // pagination: {
        //     el: '.slider-pagging',
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.slider-news-controls__arrows .slider-arrow__next',
            prevEl: '.slider-news-controls__arrows .slider-arrow__prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });
}
if (document.querySelector('.slider-documents__body')) {
    new Swiper('.slider-documents__body', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 800,
        // pagination: {
        //     el: '.slider-pagging',
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.slider-documents-controls__arrows .slider-arrow__next',
            prevEl: '.slider-documents-controls__arrows .slider-arrow__prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });
}

const copyrightElements = document.querySelectorAll('.copyright time');

if (copyrightElements.length > 0) {
    const currentYear = new Date().getFullYear();

    copyrightElements.forEach((element) => {
        const existingYear = parseInt(element.textContent);
        if (existingYear !== currentYear) {
            element.textContent = currentYear;
        }
    });
}

gsap.registerPlugin(ScrollTrigger);

gsap.to('.animate-svg-1', {
    scrollTrigger: {
        trigger: '.wrapper',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
    },
    yPercent: 70,
    x: -100,
    scale: 1.4,
    opacity: 0.5,
});

gsap.to('.animate-svg-2', {
    scrollTrigger: {
        trigger: '.wrapper',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
    },
    yPercent: 100,
    x: -200,
    scale: 1.4,
    opacity: 0.5,
});

gsap.to('.animate-svg-3', {
    scrollTrigger: {
        trigger: '.wrapper',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
    },
    yPercent: 100,
    x: -200,
    scale: 1.4,
    opacity: 0.5,
});

gsap.to('.animate-svg-4', {
    scrollTrigger: {
        trigger: '.wrapper',
        start: '20% bottom',
        end: 'bottom center',
        scrub: true,
    },
    yPercent: 100,
    x: -400,
    scale: 1.6,
    opacity: 0.5,
});

gsap.to('.animate-svg-5', {
    scrollTrigger: {
        trigger: '.wrapper',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
    },
    yPercent: 100,
    x: -200,
    scale: 1.4,
    opacity: 0.5,
});

const heroText = new SplitType('.hero-body__title');

gsap.to('.hero-body__title .char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 1,
});

const accordion = document.querySelectorAll('.accordion');

if (accordion.length > 0) {
    accordion.forEach((element) => {
        const accordionHeader = element.querySelector('.accordion__title');
        const accordionContent = element.querySelector('.accordion__content');
        const tl = gsap.timeline({ defaults: { ease: 'power2.inOut', duration: 0.3 } });
        accordionHeader.addEventListener('click', () => {
            element.classList.toggle('active');
            const condition = element.classList.contains('active');
            if (condition) {
                tl.to(accordionHeader.querySelector('.mdi.mdi-plus'), {
                    rotate: 45,
                    scale: 1.4,
                }).to(accordionContent, {
                    maxHeight: accordionContent.scrollHeight,
                    y: 0,
                    opacity: 1,
                    marginTop: 16,
                });
            } else {
                tl.to(accordionHeader.querySelector('.mdi.mdi-plus'), {
                    rotate: 0,
                    scale: 1,
                }).to(accordionContent, {
                    maxHeight: 0,
                    y: -30,
                    opacity: 0,
                    marginTop: 0,
                });
            }
        });
    });
}

const progressItems = document.querySelectorAll('.progress-body__item');

if (progressItems.length > 0) {
    progressItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            gsap.to(progressItems, {
                xPercent: -100 * i,
                x: -20 * i,
            });
            progressItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove('selected');
                    otherItem.classList.remove('completed');
                }
            });

            item.classList.add('selected');
        });
    });
}

function scrollToSection(event) {
    event.preventDefault();

    const sectionId = event.target.getAttribute('href');
    const sectionOffset = document.querySelector(sectionId).offsetTop;
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
        top: sectionOffset - headerHeight,
        behavior: 'smooth',
    });

    burger.classList.remove('active');
    headerMenu.classList.remove('active');
    document.body.classList.remove('lock');
}

const menuLinks = document.querySelectorAll('.header-nav__list li a');
const menuFooterLinks = document.querySelectorAll('.footer__nav ul li a');
menuLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});
menuFooterLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});
