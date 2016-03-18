'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (token) {

    this.decoded = (0, _jwtDecode2.default)(token);
    this.expired = expired;
    this.getClaim = getClaim;

    function expired() {
        var now = Math.round(new Date().getTime() / 1000);
        return now >= this.decoded.exp;
    }

    function getClaim(key) {
        return this.decoded[key];
    }
};

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }