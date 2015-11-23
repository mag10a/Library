class LoginController {
    constructor(authorization, $state, $ionicHistory) {
        // Dependencies
        this.authorization  = authorization;
        this.$state         = $state;
        this.$ionicHistory  = $ionicHistory;

        this.views = {
            login: {
                title: 'Login',
                buttonText: 'Sign-up'
            },
            signUp: {
                title: 'Sign-up',
                buttonText: 'Login'
            }
        };
        // Set defaults
        this.currentView            = 'login';
        this.email                  = '';
        this.password               = '';
        this.confirmPassword        = '';
        this.invalidEmail           = false;
        this.invalidPassword        = false;
        this.invalidConfirmPassword = false;

        this.authorization._auth.$unauth();
    }

    changeView() {
        if (this.currentView === 'login') {
            this.currentView = 'signUp';
        } else {
            this.currentView = 'login';
        }
    }

    getErrorMessage() {
        let errorMessage = ' -';

        if (this.invalidEmail) {
            errorMessage += ' invalid email';
        }
        if (this.invalidPassword) {
            if (this.invalidEmail)
                errorMessage += ',';
            errorMessage += ' invalid password';
        }
        if (this.invalidConfirmPassword) {
            if (this.invalidEmail || this.invalidPassword)
                errorMessage += ',';
            errorMessage += ' passwords must match.';
        }

        return errorMessage;
    }

    _validateInputs(isEmailValid) {
        this.invalidEmail           = !(isEmailValid && this.email.length > 0);
        this.invalidPassword        = !(this.password.length > 0);

        if (this.currentView === 'signUp') {
            this.invalidConfirmPassword = !(this.confirmPassword === this.password && this.confirmPassword.length > 0);
        } else {
            this.invalidConfirmPassword = false;
        }

        return !(this.invalidEmail && this.invalidPassword && this.invalidConfirmPassword);
    }

    login(isEmailValid) {
        let self = this;

        if(!self._validateInputs(isEmailValid))
            return;

        if (this.currentView === 'login') {
            this.authorization.login(this.email, this.password).then(
                () => {
                    self.$ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    self.$state.go('app.available',{ bookStatus:'available'});
                },
                (error) => {

                }
            );
        } else {
            this.authorization.signUp(this.email, this.password).then(
                () => {
                    self.$ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    self.$state.go('app.available',{ bookStatus:'available'});
                },
                () => {
                    console.log('failed');
                }
            )
        }
    }
}

LoginController.$inject = ['authorization','$state', '$ionicHistory'];

export default LoginController;