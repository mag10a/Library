class AuthorizationService {
    constructor(firebaseAuth, $q) {
        this.databaseRef = new Firebase("https://library-hybrid.firebaseio.com");
        this._auth = firebaseAuth(this.databaseRef);
        this._$q = $q;
    }

    getUserId() {
        return this.uid;
    }

    login(email, password) {
        let self = this;

        return this._auth.$authWithPassword({
            email,
            password
        }).then(
            (authData) => {
                console.log(authData);
                self.uid = authData.uid;
            }
        );
    }

    signUp(email, password) {
        return this._auth.$createUser({
            email,
            password
        });
    }
}

AuthorizationService.$inject = ['$firebaseAuth', '$q'];

export default AuthorizationService;