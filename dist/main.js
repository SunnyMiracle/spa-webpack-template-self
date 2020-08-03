(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");

var _router = __webpack_require__(/*! ./page/router */ "./page/router/index.jsx");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: 'render',
        value: function render() {
            __webpack_require__.e(/*! import() | lodash */ "vendors~lodash").then(__webpack_require__.t.bind(null, /*! lodash */ "../node_modules/lodash/lodash.js", 7)).then(function (_) {
                var element = document.createElement('div');
                element.innerHTML = _.join(['hello', 'lodash'], ' ');
                document.body.appendChild(element);
            });
            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/a' },
                            'a'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/b' },
                            'b'
                        )
                    )
                ),
                _react2.default.createElement(_router2.default, null)
            );
        }
    }]);
    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ "./main.jsx":
/*!******************!*\
  !*** ./main.jsx ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(/*! ./App */ "./App.jsx");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mountContainer = document.getElementById('mount_container');
// render to root mount element
_reactDom2.default.render(_react2.default.createElement(_App2.default, null), mountContainer);

/***/ }),

/***/ "./page/router/index.jsx":
/*!*******************************!*\
  !*** ./page/router/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    var pageALoader = (0, _reactLoadable2.default)({
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../pageA */ "./page/pageA/index.jsx", 7));
        },
        loading: _loading2.default,
        delay: 100
    });
    var pageBLoader = (0, _reactLoadable2.default)({
        loader: function loader() {
            return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, /*! ../pageB */ "./page/pageB/index.jsx", 7));
        },
        loading: _loading2.default,
        delay: 100
    });

    return React.createElement(
        _reactRouterDom.Switch,
        null,
        React.createElement(_reactRouterDom.Route, { path: '/a', component: pageALoader }),
        React.createElement(_reactRouterDom.Route, { path: '/b', component: pageBLoader })
    );
};

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");

var _reactLoadable = __webpack_require__(/*! react-loadable */ "../node_modules/react-loadable/lib/index.js");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _loading = __webpack_require__(/*! common/component/loading */ "./common/component/loading/index.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ })

},[["./main.jsx","runtime~main","common","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL21haW4uanN4Iiwid2VicGFjazovLy9zcmMvcGFnZS9yb3V0ZXIvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBSb3V0ZXJzIGZyb20gJy4vcGFnZS9yb3V0ZXInO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG9kYXNoXCIgKi8gJ2xvZGFzaCcpLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnaGVsbG8nLCAnbG9kYXNoJ10sICcgJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvYVwiPmE8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2JcIj5iPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8Um91dGVycy8+XG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuXG5cbmNvbnN0IG1vdW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50X2NvbnRhaW5lcicpO1xuLy8gcmVuZGVyIHRvIHJvb3QgbW91bnQgZWxlbWVudFxuUmVhY3REb20ucmVuZGVyKDxBcHAvPiwgbW91bnRDb250YWluZXIpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgU3dpdGNofSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBSZWFjdExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ2NvbW1vbi9jb21wb25lbnQvbG9hZGluZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgY29uc3QgcGFnZUFMb2FkZXIgPSBSZWFjdExvYWRhYmxlKHtcbiAgICAgICAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4uL3BhZ2VBJyksXG4gICAgICAgIGxvYWRpbmc6IExvYWRpbmcsXG4gICAgICAgIGRlbGF5OiAxMDBcbiAgICB9KTtcbiAgICBjb25zdCBwYWdlQkxvYWRlciA9IFJlYWN0TG9hZGFibGUoe1xuICAgICAgICBsb2FkZXI6ICgpID0+IGltcG9ydCgnLi4vcGFnZUInKSxcbiAgICAgICAgbG9hZGluZzogTG9hZGluZyxcbiAgICAgICAgZGVsYXk6IDEwMFxuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYVwiIGNvbXBvbmVudD17cGFnZUFMb2FkZXJ9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2JcIiBjb21wb25lbnQ9e3BhZ2VCTG9hZGVyfS8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUxBO0FBUUE7OztBQWhCQTtBQUNBO0FBa0JBOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBMUJBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9