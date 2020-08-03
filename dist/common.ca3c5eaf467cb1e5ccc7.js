(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./common/component/loading/index.jsx":
/*!********************************************!*\
  !*** ./common/component/loading/index.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _index = __webpack_require__(/*! ./index.less */ "./common/component/loading/index.less");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MyLoadingComponent = function MyLoadingComponent(props) {
    // Handle the loading state
    if (props.pastDelay) {
        return React.createElement(
            'div',
            { className: _index2.default.loading },
            'loading\u2026\u2026'
        );
    } else if (props.error) {
        return React.createElement(
            'div',
            null,
            'Sorry, there was a problem loading the page.'
        );
    } else {
        return null;
    }
};
exports.default = MyLoadingComponent;

/***/ }),

/***/ "./common/component/loading/index.less":
/*!*********************************************!*\
  !*** ./common/component/loading/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"loading":"_1jRnnsz0YY07oJstxJpS_s"};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmNhM2M1ZWFmNDY3Y2IxZTVjY2M3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21tb24vY29tcG9uZW50L2xvYWRpbmcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnQvbG9hZGluZy9pbmRleC5sZXNzPzM1MTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubGVzcyc7XG5cblxuY29uc3QgTXlMb2FkaW5nQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgLy8gSGFuZGxlIHRoZSBsb2FkaW5nIHN0YXRlXG4gICAgaWYgKHByb3BzLnBhc3REZWxheSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvYWRpbmd9PlxuICAgICAgICAgICAgICAgIGxvYWRpbmfigKbigKZcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSBpZiAocHJvcHMuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+U29ycnksIHRoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgcGFnZS48L2Rpdj47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE15TG9hZGluZ0NvbXBvbmVudDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsb2FkaW5nXCI6XCJfMWpSbm5zejBZWTA3b0pzdHhKcFNfc1wifTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9