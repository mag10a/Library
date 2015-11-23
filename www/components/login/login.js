import LoginController from './login-controller.js';

let loginCtrl = angular.module('login', [])
    .controller('LoginCtrl', LoginController);

export {loginCtrl};
