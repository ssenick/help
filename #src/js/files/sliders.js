//sliderPage (Главный слайдер первой страницы )
const page = document.querySelector(".page ");
const wrapper = document.querySelector(".wrapper");
let sliderPage; 

if (page) {
  function initSliderPage() {
    if (window.innerWidth >= 991.98 && page.dataset.pc == "false") {
      sliderPage = new Swiper(".page", {
        // Свои классы
        wrapperClass: "page__wrapper",
        slideClass: "page__screen",
        // Вертикальный слайдер
        direction: "vertical",

        // Количество слайдов для показа
        slidesPerView: "auto",

        // Включаем параллакс
        parallax: true,

        // Управление клавиатурой
        keyboard: {
          // Включить\выключить
          enabled: true,
          // Включить\выключить
          // только когда слайдер
          // в пределах вьюпорта
          onlyInViewport: true,
          // Включить\выключить
          // управление клавишами
          // pageUp, pageDown
          pageUpDown: true,
        },

        // Управление колесом мыши
        mousewheel: {
          // Чувствительность колеса мыши
          sensitivity: 1,
          // Класс объекта на котором
          // будет срабатывать прокрутка мышью.
          //eventsTarget: ".screen"
        },

        // Отключение функционала
        // если слайдов меньше чем нужно
        watchOverflow: true,

        // Скорость
        speed: 800,

        // Обновить свайпер
        // при изменении элементов слайдера
        observer: true,

        // Обновить свайпер
        // при изменении родительских
        // элементов слайдера
        observeParents: true,

        // Обновить свайпер
        // при изменении дочерних
        // элементов слайда
        observeSlideChildren: true,

        init: false,
        on: {
          init: function () {
            setScrollTypePage();
          },
          slidePrevTransitionStart: function () {
            screen[sliderPage.realIndex].classList.remove("_active");
          },
          slideNextTransitionStart: function () {
            screen[sliderPage.realIndex].classList.add("_active");
            indexCheck();
          },
          resize: function () {
            setScrollTypePage();
          },
        },
      });
      sliderPage.init();
    }
    page.dataset.pc = "true";
    if (window.innerWidth < 991.98) {
      page.dataset.pc = "false";
      if (page.classList.contains("swiper-container-initialized")) {
        sliderPage.destroy();
      }
    }
  }
  initSliderPage();
}
//проверка количества контента sliderPage (слайдер главной страницы)
// тут я пытался, но не получилось ничего, вернул все к freeMode
//
function setScrollTypePage() { 
  if (wrapper.classList.contains("_free")) {
    wrapper.classList.remove("_free");
    sliderPage.params.freeMode = false;
    sliderPage.init();
  }
  forSetPage();
}
function forSetPage() {
  if (page.classList.contains("swiper-container-initialized")) {
    for (let index = 0; index < sliderPage.slides.length; index++) {
      const slidePage = sliderPage.slides[index];
      const slideContent = slidePage.querySelector("._content");
      if (slideContent) {
        const slideHeight = slideContent.offsetHeight;
        if (slideHeight > window.innerHeight) {
          wrapper.classList.add("_free");
          sliderPage.params.freeMode = true;
          break;
        }
      }
    }
  }
}

if (page) {
  setScrollTypePage();
  initSliderPage();
}

//resize окна браузера
window.addEventListener("resize", () => {
  if (page) {
    initSliderPage();
    initSliderScreenTwo();
    initSliderImageScreenFive();
    initSliderContentScreenFive();
  }
  if (pageServices) {
    initSliderPageServices();
  }
});

//запуск анимации для каждего слайда
function indexCheck() {
  if (sliderPage.realIndex === 1 && !wrapper.classList.contains("_free")) {
    pageTwoAnimation();
  }
  if (sliderPage.realIndex === 2 && !wrapper.classList.contains("_free")) {
    pageFourAnimation();
  }
  if (sliderPage.realIndex === 3 && !wrapper.classList.contains("_free")) {
    pageThreeAnimation();
  }
  if (sliderPage.realIndex === 4 && !wrapper.classList.contains("_free")) {
    pageFiveAnimation();
  }
  if (sliderPage.realIndex === 5 && !wrapper.classList.contains("_free")) {
    pageSixAnimation();
  }
}


//about-company-header (ссылка якорь в хедере, прокрутка к блоку)
const menuLinkAboutCompany = document.querySelector(
  ".menu__link_about-company"
);
if (menuLinkAboutCompany) {
  menuLinkAboutCompany.addEventListener("click", function (e) {
    if (sliderPage) {
      sliderPage.slideTo(3, 800);
      e.preventDefault();
    }
  });
}


//about-company-footer (ссылка якорь в футере, прокрутка к блоку)
const FooterLinkAboutCompany = document.querySelector(
  ".navigation-content-footer__link_about-company"
);
if (FooterLinkAboutCompany) {
  FooterLinkAboutCompany.addEventListener("click", function (e) {
    if (sliderPage) {
      sliderPage.slideTo(3, 800);
      e.preventDefault();
    }
  });
}
//========================================================================================================================================================
//========================================================================================================================================================
//sliderPageServices (слайдер страницы servises)
let pageServices = document.querySelector(".page-services");
let sliderPageServices;
if (pageServices) {
  function initSliderPageServices() {
    if (window.innerWidth >= 991.98 && pageServices.dataset.pc == "false") {
      sliderPageServices = new Swiper(".page-services", {
        // Свои классы
        wrapperClass: "page-services__wrapper",
        slideClass: "page-services__block",
        // Вертикальный слайдер
        direction: "vertical",

        // Количество слайдов для показа
        slidesPerView: "auto",

        // Управление клавиатурой
        keyboard: {
          // Включить\выключить
          enabled: true,
          // Включить\выключить
          // только когда слайдер
          // в пределах вьюпорта
          onlyInViewport: true,
          // Включить\выключить
          // управление клавишами
          // pageUp, pageDown
          pageUpDown: true,
        },

        // Управление колесом мыши
        mousewheel: {
          // Чувствительность колеса мыши
          sensitivity: 1,
          // Класс объекта на котором
          // будет срабатывать прокрутка мышью.
          //eventsTarget: ".screen"
        },

        // Отключение функционала
        // если слайдов меньше чем нужно
        watchOverflow: true,

        // Скорость
        speed: 800,

        // Обновить свайпер
        // при изменении элементов слайдера
        observer: true,

        // Обновить свайпер
        // при изменении родительских
        // элементов слайдера
        observeParents: true,

        // Обновить свайпер
        // при изменении дочерних
        // элементов слайда
        observeSlideChildren: true,

        init: false,
        breakpoints: {
          320: {
            parallax: false,
          },
          992: {
            // Включаем параллакс
            parallax: true,
          },
        },
        on: {
          init: function () {
            //setScrollTypeServices();
          },
          resize: function () {
            setScrollTypeServices();
          },
        },
      });
      sliderPageServices.init();
    }
    pageServices.dataset.pc = "true";
    if (window.innerWidth < 991.98) {
      pageServices.dataset.pc = "false";
      if (pageServices.classList.contains("swiper-container-initialized")) {
        sliderPageServices.params.parallax = false;
        sliderPageServices.destroy();
      }
    }
  }
  initSliderPageServices();
}
//проверка количества контента (слайдера страницы servises)
function setScrollTypeServices() {
  if (wrapper.classList.contains("_free")) {
    wrapper.classList.remove("_free");
    sliderPageServices.params.freeMode = false;
    sliderPageServices.init();
  }
  forSetPageServises();
}
function forSetPageServises() {
  if (pageServices.classList.contains("swiper-container-initialized")) {
    for (let index = 0; index < sliderPageServices.slides.length; index++) {
      const slidePageServices = sliderPageServices.slides[index];
      const slideServicesContent = slidePageServices.querySelector("._content");
      if (slideServicesContent) {
        const slideContentHeight = slideServicesContent.offsetHeight;
        if (slideContentHeight > window.innerHeight) {
          wrapper.classList.add("_free");
          sliderPageServices.params.freeMode = true;
          break;
        }
      }
    }
  }
}
//
if (pageServices) {
  setScrollTypeServices();
}
//========================================================================================================================================================
//========================================================================================================================================================
//sliderScreenTwo ( screen-two) (второй стайдер на втором слайде главной страницы)
const slideScreenTwoOne = document.querySelector(".slide-screen-two_one");
const slideScreenTwoTwo = document.querySelector(".slide-screen-two_two");
const screenOneImages = document.querySelectorAll(".item-screen-two__image");
const sliderScreenTwoBody = document.querySelector(".slider-screen-two__body");
const screen = document.querySelectorAll(".screen");
let sliderScreenTwo;
function initSliderScreenTwo() {
  if (
    window.innerWidth >= 991.98 &&
    sliderScreenTwoBody.dataset.pc == "false"
  ) {
    sliderScreenTwo = new Swiper(sliderScreenTwoBody, {
      // Свои классы
      wrapperClass: "slider-screen-two__wrapper",
      slideClass: "slider-screen-two__slide",

      // Вертикальный слайдер
      direction: "vertical",

      // Количество слайдов для показа
      slidesPerView: 2,
      spaceBetween: 200,

      autoHeight: true,

      nested: true,

      slideToClickedSlide: false,

      simulateTouch: false,
      allowTouchMove: false,
      // Включаем параллакс

      // Управление клавиатурой
      keyboard: {
        // Включить\выключить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // Включить\выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
      },

      // Управление колесом мыши
      mousewheel: {
        // Чувствительность колеса мыши
        sensitivity: 1,
        // Класс объекта на котором
        // будет срабатывать прокрутка мышью.
        eventsTarget: ".screen-two",
      },

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      // Скорость
      speed: 800,

      // Обновить свайпер
      // при изменении элементов слайдера
      observer: true,

      // Обновить свайпер
      // при изменении родительских
      // элементов слайдера
      observeParents: true,

      init: false,

      // Обновить свайпер
      // при изменении дочерних
      // элементов слайда
      observeSlideChildren: true,
      pagination: {
        el: ".progressbar",
        type: "progressbar",
      },

      navigation: {
        nextEl: ".screen-two__arrows .arrows__item_next",
        prevEl: ".screen-two__arrows  .arrows__item_prev",
      },

      on: {
        slidePrevTransitionStart: function () {
          screenOneImages[sliderScreenTwo.previousIndex].classList.remove(
            "_active"
          );
        },
        slideNextTransitionStart: function () {
          screenOneImages[sliderScreenTwo.realIndex].classList.add("_active");
          slideScreenTwoOne.classList.add("_active");
        },
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 150,
        },
        1211: {
          slidesPerView: 2,
        },
      },
    });
    sliderScreenTwo.init();
  }
  sliderScreenTwoBody.dataset.pc = "true";
  if (window.innerWidth < 991.98) {
    sliderScreenTwoBody.dataset.pc = "false";
    if (
      sliderScreenTwoBody.classList.contains("swiper-container-initialized")
    ) {
      sliderScreenTwo.destroy();
    }
  }
}
if (page) {
  initSliderScreenTwo();
}
//========================================================================================================================================================
//========================================================================================================================================================
//sliderImageScreenFive (screen-five) (два слайдера на пятом слайдере главной страницы)
//sliderContentScreenFive (screen-five)
const imageSliderScreenFiveSlide = document.querySelectorAll(
  ".image-slider-screen-five__slide"
);
const imageSliderScreenFiveBody = document.querySelector(
  ".image-slider-screen-five__body"
);
const contentSliderScreenFiveBody = document.querySelector(
  ".content-slider-screen-five__body"
);
let sliderImageScreenFive;
function initSliderImageScreenFive() {
  if (
    window.innerWidth >= 991.98 &&
    imageSliderScreenFiveBody.dataset.pc == "false"
  ) {
    sliderImageScreenFive = new Swiper(imageSliderScreenFiveBody, {
      // Свои классы
      wrapperClass: "image-slider-screen-five__wrapper",
      slideClass: "image-slider-screen-five__slide",
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      // Вертикальный слайдер
      direction: "vertical",

      // Количество слайдов для показа
      slidesPerView: 1,
      autoHeight: true,

      nested: true,

      slideToClickedSlide: false,

      // Включаем параллакс
      parallax: true,

      slideToClickedSlide: false,

      simulateTouch: false,
      allowTouchMove: false,

      // Управление клавиатурой
      keyboard: {
        // Включить\выключить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // Включить\выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
      },
      navigation: {
        nextEl: ".screen-five__arrows  .arrows__item_next",
        prevEl: ".screen-five__arrows   .arrows__item_prev",
      },

      // Управление колесом мыши
      mousewheel: {
        // Чувствительность колеса мыши
        sensitivity: 1,
        // Класс объекта на котором
        // будет срабатывать прокрутка мышью.
        eventsTarget: ".screen-five",
      },

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      // Скорость
      speed: 800,

      // Обновить свайпер
      // при изменении элементов слайдера
      observer: true,

      // Обновить свайпер
      // при изменении родительских
      // элементов слайдера
      observeParents: true,

      init: true,

      // Обновить свайпер
      // при изменении дочерних
      // элементов слайда
      observeSlideChildren: true,
      /*
  pagination: {
    el: ".progressbar",
    type: "progressbar",
  },
*/

      on: {
        slidePrevTransitionStart: function () {
          screenFiveCircls[
            sliderContentScreenFive.previousIndex
          ].classList.remove("_active");
        },
        afterInit: function () {
          let screenFiveCircleOne = document.querySelector(
            ".content-slider-screen-five__circle_one"
          );
          if (screenFiveCircleOne) {
            screenFiveCircleOne.classList.add("_active");
          }
        },
        slideNextTransitionStart: function () {
          screenFiveCircls[sliderContentScreenFive.realIndex].classList.add(
            "_active"
          );
          imageSliderScreenFiveSlide[
            sliderImageScreenFive.realIndex
          ].classList.add("_active");
        },
      },
    });
    sliderImageScreenFive.init();
  }
  imageSliderScreenFiveBody.dataset.pc = "true";
  if (window.innerWidth < 991.98) {
    imageSliderScreenFiveBody.dataset.pc = "false";

    if (
      imageSliderScreenFiveBody.classList.contains(
        "swiper-container-initialized"
      )
    ) {
      sliderImageScreenFive.destroy();
    }
  }
}

let sliderContentScreenFive;
function initSliderContentScreenFive() {
  if (
    window.innerWidth >= 991.98 &&
    contentSliderScreenFiveBody.dataset.pc == "false"
  ) {
    sliderContentScreenFive = new Swiper(contentSliderScreenFiveBody, {
      // Свои классы
      wrapperClass: "content-slider-screen-five__wrapper",
      slideClass: "content-slider-screen-five__slide",

      // Вертикальный слайдер
      direction: "vertical",

      // Количество слайдов для показа
      slidesPerView: 1,
      autoHeight: false,

      nested: true,

      slideToClickedSlide: true,

      // Включаем параллакс
      parallax: true,

      slideToClickedSlide: false,

      simulateTouch: false,
      allowTouchMove: false,
      enabled: true,

      // Управление колесом мыши
      mousewheel: {
        // Чувствительность колеса мыши
        sensitivity: 1,
        // Класс объекта на котором
        // будет срабатывать прокрутка мышью.
        eventsTarget: ".screen-five",
      },

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      // Скорость
      speed: 800,

      // Обновить свайпер
      // при изменении элементов слайдера
      observer: true,

      // Обновить свайпер
      // при изменении родительских
      // элементов слайдера
      observeParents: true,

      init: false,

      // Обновить свайпер
      // при изменении дочерних
      // элементов слайда
      observeSlideChildren: true,

      pagination: {
        el: ".content-slider-screen-five__progressbar",
        type: "progressbar",
      },

      on: {
        slideChange: function () {},
        slidePrevTransitionStart: function () {
          screenFiveCircls[
            sliderContentScreenFive.previousIndex
          ].classList.remove("_active");
        },
        afterInit: function () {
          let screenFiveCircleOne = document.querySelector(
            ".content-slider-screen-five__circle_one"
          );
          if (screenFiveCircleOne) {
            screenFiveCircleOne.classList.add("_active");
          }
        },
        slideNextTransitionStart: function () {
          screenFiveCircls[sliderContentScreenFive.realIndex].classList.add(
            "_active"
          );
        },
      },
    });
    sliderContentScreenFive.init();
  }
  contentSliderScreenFiveBody.dataset.pc = "true";
  if (window.innerWidth < 991.98) {
    contentSliderScreenFiveBody.dataset.pc = "false";
    if (
      contentSliderScreenFiveBody.classList.contains(
        "swiper-container-initialized"
      )
    ) {
      sliderContentScreenFive.destroy();
    }
  }
}

const screenFiveCircls = document.querySelectorAll(
  ".content-slider-screen-five__circle"
);
if (page) {
  initSliderImageScreenFive();
  initSliderContentScreenFive();
}
//========================================================================================================================================================
//========================================================================================================================================================
