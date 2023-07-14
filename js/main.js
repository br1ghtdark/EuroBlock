/* =============================REVIEWS-SLIDER============================ */

new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    slideClass: "reviews__slider-item",
    navigation: {
        nextEl: ".reviews__btn-next",
        prevEl: ".reviews__btn-prev"
    },
    speed: 1300
});

/* =============================REVIEWS-SLIDER============================ */

/* =============================SALE__POPUP============================ */

let popupback = document.querySelector('.sale__popup'); // Фон попап окна
let popup_body = document.querySelector('.sale__popup-inner'); // Само окно
let openPopupBtn = document.querySelectorAll('.sale__btn'); // Кнопки для показа окна
let closePopupBtn = document.querySelector('.popup__inner-close'); // Кнопка для скрытия окна

openPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupback.classList.add('active'); // Добавляем класс 'active' для фона
        popup_body.classList.add('active'); // И для самого окна
    })
});

closePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupback.classList.remove('active'); // Убираем активный класс с фона
    popup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popup_body) { // Если цель клика - фот, то:
        popupback.classList.remove('active'); // Убираем активный класс с фона
        popup_body.classList.remove('active'); // И с окна
    }
});

/* =============================SALE__POPUP============================ */

/* =============================HEADER__POPUP============================ */

let headerpopupback = document.querySelector('.header__popup'); // Фон попап окна
let headerpopup_body = document.querySelector('.header__popup-inner'); // Само окно
let headeropenPopupBtn = document.querySelectorAll('.header__btn, .footer__btn'); // Кнопки для показа окна
let headerclosePopupBtn = document.querySelector('.header__popup-close'); // Кнопка для скрытия окна

headeropenPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        headerpopupback.classList.add('active'); // Добавляем класс 'active' для фона
        headerpopup_body.classList.add('active'); // И для самого окна
    })
});

headerclosePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    headerpopupback.classList.remove('active'); // Убираем активный класс с фона
    headerpopup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === headerpopup_body) { // Если цель клика - фот, то:
        headerpopupback.classList.remove('active'); // Убираем активный класс с фона
        headerpopup_body.classList.remove('active'); // И с окна
    }
});

/* =============================HEADER__POPUP============================ */

/* =============================BLOCKS__POPUP1============================ */

let Block1popupback = document.querySelector('.blocks__popup1'); // Фон попап окна
let Block1popup_body = document.querySelector('.blocks__popup1-inner'); // Само окно
let Block1openPopupBtn = document.querySelectorAll('.block1'); // Кнопки для показа окна
let Block1closePopupBtn = document.querySelector('.blocks__popup1-close'); // Кнопка для скрытия окна

Block1openPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        Block1popupback.classList.add('active'); // Добавляем класс 'active' для фона
        Block1popup_body.classList.add('active'); // И для самого окна
    })
});

Block1closePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    Block1popupback.classList.remove('active'); // Убираем активный класс с фона
    Block1popup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === Block1popup_body) { // Если цель клика - фот, то:
        Block1popupback.classList.remove('active'); // Убираем активный класс с фона
        Block1popup_body.classList.remove('active'); // И с окна
    }
});

/* =============================BLOCKS__POPUP1============================ */

/* =============================BLOCKS__POPUP2============================ */

let Block2popupback = document.querySelector('.blocks__popup2'); // Фон попап окна
let Block2popup_body = document.querySelector('.blocks__popup2-inner'); // Само окно
let Block2openPopupBtn = document.querySelectorAll('.block2'); // Кнопки для показа окна
let Block2closePopupBtn = document.querySelector('.blocks__popup2-close'); // Кнопка для скрытия окна

Block2openPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        Block2popupback.classList.add('active'); // Добавляем класс 'active' для фона
        Block2popup_body.classList.add('active'); // И для самого окна
    })
});

Block2closePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    Block2popupback.classList.remove('active'); // Убираем активный класс с фона
    Block2popup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === Block2popup_body) { // Если цель клика - фот, то:
        Block2popupback.classList.remove('active'); // Убираем активный класс с фона
        Block2popup_body.classList.remove('active'); // И с окна
    }
});

/* =============================BLOCKS__POPUP2============================ */

/* =============================BLOCKS__POPUP3============================ */

let Block3popupback = document.querySelector('.blocks__popup3'); // Фон попап окна
let Block3popup_body = document.querySelector('.blocks__popup3-inner'); // Само окно
let Block3openPopupBtn = document.querySelectorAll('.block3'); // Кнопки для показа окна
let Block3closePopupBtn = document.querySelector('.blocks__popup3-close'); // Кнопка для скрытия окна

Block3openPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        Block3popupback.classList.add('active'); // Добавляем класс 'active' для фона
        Block3popup_body.classList.add('active'); // И для самого окна
    })
});

Block3closePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    Block3popupback.classList.remove('active'); // Убираем активный класс с фона
    Block3popup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === Block3popup_body) { // Если цель клика - фот, то:
        Block3popupback.classList.remove('active'); // Убираем активный класс с фона
        Block3popup_body.classList.remove('active'); // И с окна
    }
});

/* =============================BLOCKS__POPUP3============================ */

/* =============================SERVICE__POPUP============================ */

let servicespopupback = document.querySelector('.services__popup'); // Фон попап окна
let servicespopup_body = document.querySelector('.services__popup-inner'); // Само окно
let servicesopenPopupBtn = document.querySelectorAll('.services__unload-btn'); // Кнопки для показа окна
let servicesclosePopupBtn = document.querySelector('.services__popup-close'); // Кнопка для скрытия окна

servicesopenPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        servicespopupback.classList.add('active'); // Добавляем класс 'active' для фона
        servicespopup_body.classList.add('active'); // И для самого окна
    })
});

servicesclosePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    servicespopupback.classList.remove('active'); // Убираем активный класс с фона
    servicespopup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === servicespopup_body) { // Если цель клика - фот, то:
        servicespopupback.classList.remove('active'); // Убираем активный класс с фона
        servicespopup_body.classList.remove('active'); // И с окна
    }
});

/* =============================SERVICE__POPUP============================ */

/* =============================QUESTIONS__POPUP============================ */

let questionspopupback = document.querySelector('.questions__popup'); // Фон попап окна
let questionspopup_body = document.querySelector('.questions__popup-inner'); // Само окно
let questionsopenPopupBtn = document.querySelectorAll('.questions__inner-btn, .how__item-btn'); // Кнопки для показа окна
let questionsclosePopupBtn = document.querySelector('.questions__popup-close'); // Кнопка для скрытия окна

questionsopenPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        questionspopupback.classList.add('active'); // Добавляем класс 'active' для фона
        questionspopup_body.classList.add('active'); // И для самого окна
    })
});

questionsclosePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    questionspopupback.classList.remove('active'); // Убираем активный класс с фона
    questionspopup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === questionspopup_body) { // Если цель клика - фот, то:
        questionspopupback.classList.remove('active'); // Убираем активный класс с фона
        questionspopup_body.classList.remove('active'); // И с окна
    }
});

/* =============================QUESTIONS__POPUP============================ */