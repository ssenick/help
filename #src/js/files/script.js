//========================================================================================================================================================
//========================================================================================================================================================
//animation
//header + page-one


const pageHeader = gsap.timeline({
  defaults: { duration: 0.8 },
});

//header
function headerAnimation () {
  pageHeader.from(".header__logo", { y: 30, opacity: 0 });
  pageHeader.from(".burger", { y: 20, opacity: 0 }, "<0.3");
  pageHeader.from("._menu__item-one ", { y: 20, opacity: 0 }, "<0.1");
  pageHeader.from("._menu__item-two ", { y: 20, opacity: 0 }, "<0.1");
  pageHeader.from("._menu__item-three ", { y: 20, opacity: 0 }, "<0.1");
  pageHeader.from(".header__call", { y: 20, opacity: 0 }, "<0.1");
}
// const header = document.querySelector(".header");
// if(header){
//   headerAnimation()
// }

//========================================================================================================================================================
//page-one

const pageOne = gsap.timeline({
  defaults: { duration: 0.8 },
});
function pageOneAnimation() {
  pageOne.from(".screen-one__title", { y: 40, opacity: 0 }, "<0.2");
  pageOne.from(".screen-one__decor", { x: -40, opacity: 0 }, "<0.1");
  pageOne.from(
    "._columns-screen-one__namber-one ",
    { y: 20, opacity: 0 },
    "<0.1"
  );
  pageOne.from("._columns-screen-one__text_one", { y: 20, opacity: 0 }, "<0.1");
  pageOne.from(
    "._columns-screen-one__namber-two ",
    { y: 20, opacity: 0 },
    "<0.1"
  );
  pageOne.from("._columns-screen-one__text_two", { y: 20, opacity: 0 }, "<0.1");
  pageOne.from(
    "._columns-screen-one__namber-three ",
    { y: 20, opacity: 0 },
    "<0.1"
  );
  pageOne.from(
    "._columns-screen-one__text_three ",
    { y: 20, opacity: 0 },
    "<0.1"
  );
}
// const screenOne = document.querySelector(".screen_one");
// if (screenOne   ) {
//   pageOneAnimation();
// }
//========================================================================================================================================================
//screen-two
const pageTwo = gsap.timeline({
  defaults: { duration: 0.8 },
});
function pageTwoAnimation() {
  pageTwo.from(".item-screen-two__title", { y: 50, opacity: 0 }, "+=0.8");
  pageTwo.from(
    "._slide-screen-two__body-one",
    { y: 200, opacity: 0, duration: 0.5 },
    "<0.5"
  );
  pageTwo.from(".paggination", { y: 30, opacity: 0, duration: 1 }, "<");
  pageTwo.from(
    ".item-screen-two__images",
    { scale: 0.6, opacity: 0, ease: Power4.easeOuteaseOut },
    "<0.2"
  );
}
//========================================================================================================================================================
//screen-three
const pageFour = gsap.timeline({
  defaults: { duration: 0.8 },
});
function pageFourAnimation() {
  pageFour.from(".screen-four__title ", { y: 50, opacity: 0 }, "+=1");
  pageFour.from(
    ".decor-image-screen-four ",
    { opacity: 0, duration: 1.2, ease: Circ.easeOuteaseOut },
    "-=0.8"
  );
  pageFour.from(
    ".decor-image-screen-four__rectangle ",
    { rotate: -10, duration: 1.2 },
    "-=0.8"
  );

  pageFour.from(
    ".screen-four__decor ",
    { opacity: 0, duration: 1.2, ease: Circ.easeOuteaseOut },
    "<"
  );
  pageFour.from("._item-screen-four-one ", { y: 50, opacity: 0 }, "-=1");
  pageFour.from("._item-screen-four-two ", { y: 50, opacity: 0 }, "<0.1");
  pageFour.from("._item-screen-four-three ", { y: 50, opacity: 0 }, "<0.1");
  pageFour.from("._item-screen-four-four", { y: 50, opacity: 0 }, "<0.1");
}
//========================================================================================================================================================
//screen-three
const pageThree = gsap.timeline({
  defaults: { duration: 0.8 },
});
function pageThreeAnimation() {
  pageThree.from(".screen-three__subtitle ", { y: 50, opacity: 0 }, "+=1");
  pageThree.from(".screen-three__title ", { y: 50, opacity: 0 }, "<0.1");
  pageThree.from("._screen-three__column-one ", { x: -50, opacity: 0 }, "<0.1");
  pageThree.from("._screen-three__column-two ", { x: -50, opacity: 0 }, "<0.1");
  pageThree.from(
    "._screen-three__column-three ",
    { x: -50, opacity: 0 },
    "<0.1"
  );
}
//========================================================================================================================================================
//screen-five
const pageFive = gsap.timeline({
  defaults: { duration: 0.8 },
});
function pageFiveAnimation() {
  pageFive.from(".screen-five__title ", { y: 50, opacity: 0 }, "+=1");
  pageFive.from(".image-slider-screen-five__logo ", { opacity: 0 }, "<0.1");
  pageFive.from(
    "._slide-img-screen-five__image-one ",
    { scale: 0.8, opacity: 0 },
    "<0.1"
  );
  pageFive.from(
    ".content-slider-screen-five__box-circle ",
    { y: 50, opacity: 0 },
    "<"
  );
  pageFive.from(
    ".content-slider-screen-five__body",
    { y: 50, opacity: 0 },
    "<"
  );

}
//========================================================================================================================================================
//screen-six
const pageSix = gsap.timeline({
  defaults: { duration: 0.8 },
});
function pageSixAnimation() {
  pageSix.from(".screen-six__title ", { y: 50, opacity: 0 }, "+=1");
  pageSix.from(".screen-six__wrapper ", { y: 50, opacity: 0 }, "<0.1");
  pageSix.from(".item-screen-six__label ", { y: 10, opacity: 0 }, "<");
  pageSix.from(".item-screen-six__text ", { y: 10, opacity: 0 }, "<0.1");
  pageSix.from(".item-screen-six__calendar ", { y: 10, opacity: 0 }, "<0.1");
  pageSix.from(".item-screen-six__link ", { y: 10, opacity: 0 }, "<0.1");
  pageSix.from("._brands-screen-six__item-one ", { x: -20, opacity: 0 }, "<");
  pageSix.from("._brands-screen-six__item-two", { x: -20, opacity: 0 }, "<0.1");
  pageSix.from(
    "._brands-screen-six__item-three ",
    { x: -20, opacity: 0 },
    "<0.1"
  );
  pageSix.from(
    "._brands-screen-six__item-four ",
    { x: -20, opacity: 0 },
    "<0.1"
  );
  pageSix.from(
    "._brands-screen-six__item-five ",
    { x: -20, opacity: 0 },
    "<0.1"
  );
  pageSix.from("._brands-screen-six__item-six", { x: -20, opacity: 0 }, "<0.1");
}
//========================================================================================================================================================
//========================================================================================================================================================
//services
const servisesPage = gsap.timeline({
  defaults: { duration: 0.8 },
});
function servisesAnimation() {
  servisesPage.from("._block-title", { y: 50, opacity: 0 }, "+=0.8");
  servisesPage.from("._block-image", { y: 50, opacity: 0 }, "<0.1");
  servisesPage.from("._block-number", { y: 50, opacity: 0 }, "<0.1");
  servisesPage.from("._block-label", { y: 50, opacity: 0 }, "<0.1");
  servisesPage.from("._block-list", { y: 50, opacity: 0 }, "<0.1");
}
// const blockOne = document.querySelector(".block_one ");
// if (blockOne) {
//   servisesAnimation();
// }
//========================================================================================================================================================
//========================================================================================================================================================
//contacts
const contactsPage = gsap.timeline({
  defaults: { duration: 0.8 },
});
function contactsAnimation() {
  contactsPage.from("._contacts-title", { y: 50, opacity: 0 }, "+=0.8");
  contactsPage.from("._info-contacts-row-one", { y: 50, opacity: 0 }, "<0.1");
  contactsPage.from("._info-contacts-row-two", { y: 50, opacity: 0 }, "<0.1");
  contactsPage.from("._info-contacts-row-map", { opacity: 0 }, "<0.1");
}

// const mainContacts = document.querySelector(".main__contacts");
// if (mainContacts) {
//   contactsAnimation();
// }


// // Целевой элемент, за которым нужно наблюдать
// const targetElement = document.querySelector(".wrapper");
//
// // Создание экземпляра MutationObserver с колбэком
// const observer = new MutationObserver((mutationsList, observer) => {
//   // Проверяем каждое изменение в списке мутаций
//   mutationsList.forEach((mutation) => {
//     // Проверяем, был ли добавлен класс
//     if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
//       // Проверяем, содержит ли элемент требуемый класс
//       if (targetElement.classList.contains("_loaded")) {
//         // Если содержит, вызываем нужную функцию
//         contactsAnimation(); // Запустить анимацию
//         // Отключаем дальнейшее наблюдение
//         observer.disconnect();
//       }
//     }
//   });
// });
//
// // Настройка наблюдения за изменениями атрибута class
// observer.observe(targetElement, { attributes: true });
