/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
// import文を使ってSassファイルを読み込む。


//以下ハンバーガーメニューの際の記述
const humburgerBox = document.getElementById("js-box");
const nav = document.getElementById("js-nav");

humburgerBox.addEventListener("click", function () {
	humburgerBox.classList.toggle("close");
	nav.classList.toggle("close");
});

// サブメニュー内のリンクに対して、クリックイベントリスナーを設定
const subMenuLinks = document.querySelectorAll(".sp-menu__container a");
subMenuLinks.forEach((link) => {
	link.addEventListener("click", function () {
		// ハンバーガーメニューを閉じる
		humburgerBox.classList.remove("close");
		nav.classList.remove("close");
		spHeader.classList.remove("close");
	});
});

//contact form7での日程項目　指定された月の第２土曜日の内容を取得する
function getSecondSaturdays(fromDate, monthsAhead) {
	let dates = [];
	for (let i = 0; i < monthsAhead; i++) {
		let firstDayOfMonth = new Date(
			fromDate.getFullYear(),
			fromDate.getMonth() + i,
			1
		);
		let firstSaturday = new Date(firstDayOfMonth);
		while (firstSaturday.getDay() !== 6) {
			firstSaturday.setDate(firstSaturday.getDate() + 1);
		}
		let secondSaturday = new Date(firstSaturday);
		secondSaturday.setDate(secondSaturday.getDate() + 7);

		dates.push(secondSaturday);
	}
	return dates;
}

document.addEventListener("DOMContentLoaded", function () {
	let fromDate = new Date();
	let monthsAhead = 6;
	let saturdays = getSecondSaturdays(fromDate, monthsAhead);
	let selectElement = document.getElementById("your-date");

	saturdays.forEach(function (date) {
		let option = document.createElement("option");
		option.value = date.toISOString();
		option.text = date.toISOString().split("T")[0];
		selectElement.appendChild(option);
	});
});

// WebPフォーマットの対応確認
function checkWebpSupport() {
	return new Promise((resolve) => {
		const image = new Image();
		image.onload = image.onerror = function () {
			resolve(image.height === 2);
		};
		image.src =
			"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	});
}

// 対応しているかどうかでクラスを付与
checkWebpSupport().then((isSupported) => {
	const htmlClassList = document.documentElement.classList;
	if (isSupported) {
		htmlClassList.add("is-webp");
	} else {
		htmlClassList.add("is-no-webp");
	}
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

}();
/******/ })()
;
//# sourceMappingURL=main.js.map