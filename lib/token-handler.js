'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (token) {

    this.token = token;

    this.decoded = (0, _jwtDecode2.default)(this.token);

    this.expired = function () {
        var now = Math.round(new Date().getTime() / 1000);
        return now >= this.decoded.exp;
    };

    this.getClaim = function (key) {
        return this.decoded[key];
    };

    this.getToken = function () {
        return this.token;
    };
};

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }