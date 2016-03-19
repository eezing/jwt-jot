'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (key, token) {

    if (typeof key !== 'string') throw new Error('First argument must be a string - used as key when storing token in localStorage.');

    var tokenHandler = null;

    if (token) {
        setStoredToken(key, token);
        tokenHandler = new _tokenHandler2.default(token);
    } else {
        var saved_token = getStoredToken(key);
        tokenHandler = saved_token ? new _tokenHandler2.default(saved_token) : null;
    }

    this.valid = function () {
        return tokenHandler ? !tokenHandler.expired() : false;
    };

    this.getToken = function () {
        return tokenHandler ? tokenHandler.getToken() : null;
    };

    this.eject = function () {
        removeStoredToken(key);
    };
};

var _tokenHandler = require('./token-handler');

var _tokenHandler2 = _interopRequireDefault(_tokenHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setStoredToken(key, token) {
    localStorage.setItem(key, token);
}

function getStoredToken(key) {
    return localStorage.getItem(key);
}

function removeStoredToken(key) {
    localStorage.removeItem(key);
}