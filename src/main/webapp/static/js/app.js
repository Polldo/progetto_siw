'use strict';


angular
    .module('artGallery', [
        'ngAnimate',
        'ngAria',
        'ngRoute',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'static/views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/author/', {
                templateUrl: 'static/views/author.html',
                controller: 'AuthorCtrl'
            })
            .when('/author-admin/', {
                templateUrl: 'static/views/author-admin.html',
                controller: 'AuthorAdminCtrl'
            })
            .when('/author-profile/', {
                templateUrl: 'static/views/author-profile.html',
                controller: 'AuthorProfileCtrl'
            })
            .when('/painting/', {
                templateUrl: 'static/views/painting.html',
                controller: 'PaintingCtrl'
            })
            .when('/painting-admin/', {
                templateUrl: 'static/views/painting-admin.html',
                controller: 'PaintingAdminCtrl'
            })
            .when('/room/', {
                templateUrl: 'static/views/room.html',
                controller: 'RoomCtrl'
            })
            .when('/picture/', {
                templateUrl: 'static/views/picture.html',
                controller: 'PictureCtrl'
            })
             .when('/info/', {
                templateUrl: 'static/views/info.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .constant('config', {
        path: 'http://localhost:8080/artgallery'
    })
;
