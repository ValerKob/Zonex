/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/shop-slider-one.js":
/*!******************************************!*\
  !*** ./src/assets/js/shop-slider-one.js ***!
  \******************************************/
/***/ (function() {

eval("const slides = document.querySelectorAll('.slide');\r\nconst slides__img = document.querySelectorAll('.slider-img');\r\nconst slides__title = document.querySelectorAll('.sidebar__title');\r\nconst slides__text = document.querySelectorAll('.sidebar__text');\r\nconst dots = document.querySelectorAll('.dot');\r\n\r\nlet index = 0;\r\n\r\nconst activeSlide = n => {\r\n\r\n    for (let slide of slides) {\r\n        slide.classList.remove('active');\r\n    }\r\n\r\n    for (let slideI of slides__img) {\r\n        slideI.classList.remove('active');\r\n    }\r\n    \r\n    for (let slideT of slides__title) {\r\n        slideT.classList.remove('active');\r\n    }\r\n\r\n    for (let slideText of slides__text) {\r\n        slideText.classList.remove('active');\r\n    }\r\n\r\n    slides[n].classList.add('active');\r\n    slides__img[n].classList.add('active');\r\n    slides__title[n].classList.add('active');\r\n    slides__text[n].classList.add('active');\r\n}\r\n\r\nconst activeDot = n => {\r\n\r\n    for (let dot of dots) {\r\n        dot.classList.remove('active');\r\n    }\r\n\r\n    dots[n].classList.add('active');\r\n\r\n}\r\n\r\nconst prepareCurrentSlide = ind => {\r\n    activeSlide(ind);\r\n    activeDot(ind);\r\n}\r\n\r\nconst nextSlide = () => {\r\n    \r\n    if (index == slides.length - 1) {\r\n        index = 0;\r\n        prepareCurrentSlide(index);\r\n    } else {\r\n        index++;\r\n        prepareCurrentSlide(index);\r\n    }\r\n\r\n}\r\n\r\ndots.forEach((item, indexDot) => {\r\n    item.addEventListener('click', () => {\r\n        index = indexDot;\r\n        prepareCurrentSlide(index);\r\n    })\r\n})\r\n\r\n// setInterval(nextSlide, 4500);\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/shop-slider-one.js?");

/***/ }),

/***/ "./src/assets/js/shop-slider-two.js":
/*!******************************************!*\
  !*** ./src/assets/js/shop-slider-two.js ***!
  \******************************************/
/***/ (function() {

eval("const slides__img = document.querySelectorAll('.img__slider-2');\r\nconst slides__title = document.querySelectorAll('.slider-2--title');\r\nconst slides__text = document.querySelectorAll('.slider-2--text');\r\nconst slides__button__left = document.querySelectorAll('.slider-2--button_left');\r\nconst slides__button__right = document.querySelectorAll('.slider-2--button_right');\r\nconst prev = document.querySelector('#btn__prev-2');\r\nconst next = document.querySelector('#btn__next-2');\r\nconst slides = document.querySelectorAll('.slider-2');\r\n\r\nlet index = 0;\r\n\r\nconst activeSlide = n => {\r\n\r\n    for (let slide of slides) {\r\n        slide.classList.remove('active');\r\n    }\r\n\r\n    for (let slide__img of slides__img) {\r\n        slide__img.classList.remove('active');\r\n    }\r\n\r\n    for (let slide__title of slides__title) {\r\n        slide__title.classList.remove('active');\r\n    }\r\n\r\n    for (let slide__text of slides__text) {\r\n        slide__text.classList.remove('active');\r\n    }\r\n\r\n    for (let slide__button__left of slides__button__left) {\r\n        slide__button__left.classList.remove('activeButton');\r\n    }\r\n\r\n    for (let slide__button__right of slides__button__right) {\r\n        slide__button__right.classList.remove('activeButton');\r\n    }\r\n\r\n    slides[n].classList.add('active');\r\n    slides__img[n].classList.add('active');\r\n    slides__title[n].classList.add('active');\r\n    slides__text[n].classList.add('active');\r\n    slides__button__left[n].classList.add('activeButton');\r\n    slides__button__right[n].classList.add('activeButton');\r\n}\r\n\r\nconst prepareCurrentSlide = ind => {\r\n    activeSlide(ind);\r\n}\r\n\r\nconst nextSlide = () => {\r\n    \r\n    if (index == slides.length - 1) {\r\n        index = 0;\r\n        prepareCurrentSlide(index);\r\n    } else {\r\n        index++;\r\n        prepareCurrentSlide(index);\r\n    }\r\n\r\n}\r\n\r\nconst prevSlide = () => {\r\n    \r\n    if (index == 0) {\r\n        index = slides.length - 1;\r\n        prepareCurrentSlide(index);\r\n    } else {\r\n        index--;\r\n        prepareCurrentSlide(index);\r\n    }\r\n\r\n}\r\n\r\nnext.addEventListener('click', nextSlide);\r\nprev.addEventListener('click', prevSlide);\r\n\r\n//setInterval(nextSlide, 2500);\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/shop-slider-two.js?");

/***/ }),

/***/ "./src/assets/js/slider-button-1.js":
/*!******************************************!*\
  !*** ./src/assets/js/slider-button-1.js ***!
  \******************************************/
/***/ (function() {

eval("let buttonLeft = document.getElementById(\"slider-2--button_left-one\");\r\nlet buttonRigth = document.getElementById(\"slider-2--button_right-one\");\r\n\r\nbuttonLeft.onmouseover = function() {\r\n    buttonRigth.classList.add(\"active\");\r\n}\r\n\r\nbuttonLeft.onmouseout = function() {\r\n    buttonRigth.classList.remove(\"active\");\r\n}\r\n\r\nbuttonRigth.onmouseover = function() {\r\n    buttonLeft.classList.add(\"active\");\r\n}\r\n\r\nbuttonRigth.onmouseout = function() {\r\n    buttonLeft.classList.remove(\"active\");\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider-button-1.js?");

/***/ }),

/***/ "./src/assets/js/slider-button-2.js":
/*!******************************************!*\
  !*** ./src/assets/js/slider-button-2.js ***!
  \******************************************/
/***/ (function() {

eval("let buttonLeft = document.getElementById(\"slider-2--button_left-two\");\r\nlet buttonRigth = document.getElementById(\"slider-2--button_right-two\");\r\n\r\nbuttonLeft.onmouseover = function() {\r\n    buttonRigth.classList.add(\"active\");\r\n}\r\n\r\nbuttonLeft.onmouseout = function() {\r\n    buttonRigth.classList.remove(\"active\");\r\n}\r\n\r\nbuttonRigth.onmouseover = function() {\r\n    buttonLeft.classList.add(\"active\");\r\n}\r\n\r\nbuttonRigth.onmouseout = function() {\r\n    buttonLeft.classList.remove(\"active\");\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider-button-2.js?");

/***/ }),

/***/ "./src/assets/js/slider-button-3.js":
/*!******************************************!*\
  !*** ./src/assets/js/slider-button-3.js ***!
  \******************************************/
/***/ (function() {

eval("let buttonLeft = document.getElementById(\"slider-2--button_left-three\");\r\nlet buttonRigth = document.getElementById(\"slider-2--button_right-three\");\r\n\r\nbuttonLeft.onmouseover = function() {\r\n    buttonRigth.classList.add(\"active\");\r\n}\r\n\r\nbuttonLeft.onmouseout = function() {\r\n    buttonRigth.classList.remove(\"active\");\r\n}\r\n\r\nbuttonRigth.onmouseover = function() {\r\n    buttonLeft.classList.add(\"active\");\r\n}\r\n\r\nbuttonRigth.onmouseout = function() {\r\n    buttonLeft.classList.remove(\"active\");\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider-button-3.js?");

/***/ }),

/***/ "./src/assets/js/slider__button-2.js":
/*!*******************************************!*\
  !*** ./src/assets/js/slider__button-2.js ***!
  \*******************************************/
/***/ (function() {

eval("let buttonPrev = document.getElementById(\"btn__prev-2\");\r\nlet buttonNext = document.getElementById(\"btn__next-2\");\r\n\r\nbuttonPrev.onmouseover = function() {\r\n    buttonNext.classList.add(\"active\");\r\n}\r\n\r\nbuttonPrev.onmouseout = function() {\r\n    buttonNext.classList.remove(\"active\");\r\n}\r\n\r\nbuttonNext.onmouseover = function() {\r\n    buttonPrev.classList.add(\"active\");\r\n}\r\n\r\nbuttonNext.onmouseout = function() {\r\n    buttonPrev.classList.remove(\"active\");\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider__button-2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/shop-slider-one.js"]();
/******/ 	__webpack_modules__["./src/assets/js/shop-slider-two.js"]();
/******/ 	__webpack_modules__["./src/assets/js/slider-button-1.js"]();
/******/ 	__webpack_modules__["./src/assets/js/slider-button-2.js"]();
/******/ 	__webpack_modules__["./src/assets/js/slider-button-3.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/slider__button-2.js"]();
/******/ 	
/******/ })()
;