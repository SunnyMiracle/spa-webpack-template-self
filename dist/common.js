(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./common/component/button/index.jsx":
/*!*******************************************!*\
  !*** ./common/component/button/index.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_React$Component) {
    (0, _inherits3.default)(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3.default)(this, Button);
        return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
    }

    (0, _createClass3.default)(Button, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                { disabled: true },
                'Button'
            );
        }
    }]);
    return Button;
}(_react2.default.Component);

exports.default = Button;

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21tb24vY29tcG9uZW50L2J1dHRvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21tb24vY29tcG9uZW50L2xvYWRpbmcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnQvbG9hZGluZy9pbmRleC5sZXNzPzM1MTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgIEJ1dHRvblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4Lmxlc3MnO1xuXG5cbmNvbnN0IE15TG9hZGluZ0NvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIC8vIEhhbmRsZSB0aGUgbG9hZGluZyBzdGF0ZVxuICAgIGlmIChwcm9wcy5wYXN0RGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sb2FkaW5nfT5cbiAgICAgICAgICAgICAgICBsb2FkaW5n4oCm4oCmXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmVycm9yKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlNvcnJ5LCB0aGVyZSB3YXMgYSBwcm9ibGVtIGxvYWRpbmcgdGhlIHBhZ2UuPC9kaXY+O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBNeUxvYWRpbmdDb21wb25lbnQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibG9hZGluZ1wiOlwiXzFqUm5uc3owWVkwN29Kc3R4SnBTX3NcIn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7OztBQVBBO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==