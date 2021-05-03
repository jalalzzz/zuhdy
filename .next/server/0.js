exports.ids = [0];
exports.modules = {

/***/ "./src/services/photoswipe.ts":
/*!************************************!*\
  !*** ./src/services/photoswipe.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createGallery; });
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! photoswipe */ "photoswipe");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "photoswipe/dist/photoswipe-ui-default");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__);
// third-party


const template = `
<!--suppress CheckTagEmptyBody -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <!--<button class="pswp__button pswp__button&#45;&#45;share" title="Share"></button>-->
                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>
`;
const div = document.createElement('div');
div.innerHTML = template;
const element = div.firstElementChild;
document.body.appendChild(element);
function createGallery(images, options) {
  return new photoswipe__WEBPACK_IMPORTED_MODULE_0___default.a(element, photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1___default.a, images, options);
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGhvdG9zd2lwZS50cyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUdhbGxlcnkiLCJpbWFnZXMiLCJvcHRpb25zIiwiUGhvdG9Td2lwZSIsIlBob3RvU3dpcGVVSURlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsUUFBUSxHQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXBDQTtBQXNDQSxNQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBRUFGLEdBQUcsQ0FBQ0csU0FBSixHQUFnQkosUUFBaEI7QUFFQSxNQUFNSyxPQUFPLEdBQUdKLEdBQUcsQ0FBQ0ssaUJBQXBCO0FBRUFKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxXQUFkLENBQTBCSCxPQUExQjtBQUVlLFNBQVNJLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQWtEQyxPQUFsRCxFQUErRTtBQUMxRixTQUFPLElBQUlDLGlEQUFKLENBQWVQLE9BQWYsRUFBd0JRLDRFQUF4QixFQUE2Q0gsTUFBN0MsRUFBcURDLE9BQXJELENBQVA7QUFDSCxDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlyZC1wYXJ0eVxuaW1wb3J0IFBob3RvU3dpcGUgZnJvbSAncGhvdG9zd2lwZSc7XG5pbXBvcnQgUGhvdG9Td2lwZVVJRGVmYXVsdCBmcm9tICdwaG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS11aS1kZWZhdWx0JztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48IS0tc3VwcHJlc3MgQ2hlY2tUYWdFbXB0eUJvZHkgLS0+XG48ZGl2IGNsYXNzPVwicHN3cFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgPGRpdiBjbGFzcz1cInBzd3BfX2JnXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBzd3BfX3Njcm9sbC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19pdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9faXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2l0ZW1cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX191aSBwc3dwX191aS0taGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fdG9wLWJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jb3VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWNsb3NlXCIgdGl0bGU9XCJDbG9zZSAoRXNjKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbiYjNDU7JiM0NTtzaGFyZVwiIHRpdGxlPVwiU2hhcmVcIj48L2J1dHRvbj4tLT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tZnNcIiB0aXRsZT1cIlRvZ2dsZSBmdWxsc2NyZWVuXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLXpvb21cIiB0aXRsZT1cIlpvb20gaW4vb3V0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19pY25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19jdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19wcmVsb2FkZXJfX2RvbnV0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fc2hhcmUtbW9kYWwgcHN3cF9fc2hhcmUtbW9kYWwtLWhpZGRlbiBwc3dwX19zaW5nbGUtdGFwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3NoYXJlLXRvb2x0aXBcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWFycm93LS1sZWZ0XCIgdGl0bGU9XCJQcmV2aW91cyAoYXJyb3cgbGVmdClcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHRcIiB0aXRsZT1cIk5leHQgKGFycm93IHJpZ2h0KVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2NhcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY2FwdGlvbl9fY2VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmA7XG5cbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5kaXYuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cbmNvbnN0IGVsZW1lbnQgPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQhIGFzIEhUTUxFbGVtZW50O1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHYWxsZXJ5KGltYWdlczogUGhvdG9Td2lwZS5JdGVtW10sIG9wdGlvbnM6IFBob3RvU3dpcGUuT3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUGhvdG9Td2lwZShlbGVtZW50LCBQaG90b1N3aXBlVUlEZWZhdWx0LCBpbWFnZXMsIG9wdGlvbnMpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==