let menu = angular.module('menu', [])
    .controller('MenuCtrl', [function() {
        this.menuItems = [
            {
                title: 'Available',
                appState: 'app.available({ bookStatus: \'available\'})'
            },
            {
                title: 'Checked-out',
                appState: 'app.checkedOut({ bookStatus: \'checkedOut\'})'
            }
        ];
    }]);

export {menu};