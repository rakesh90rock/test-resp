'use strict';

/**
 * Main AngularJS Web Application
 */
var app = angular.module('AuAlumni', ['ui.bootstrap', 'ngRoute', 'mgo-angular-wizard', 'ngValidate']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    // Home
        .when("/", { templateUrl: "partials/home.html", controller: "PageCtrl" })
        // Pages
        .when("/about", {
            templateUrl: "partials/about.html",
            controller: "PageCtrl"
        })

    .when("/news-events", {
        templateUrl: "partials/news-events.html",
        controller: "PageCtrl"
    })

    .when("/GlobalMap", {
        templateUrl: "partials/global-map.html",
        controller: "PageCtrl"
    })

    .when("/admission", {
        templateUrl: "partials/Admissions.html",
        controller: "PageCtrl"
    })


    .when("/contact", {
        templateUrl: "partials/Contact.html",
        controller: "PageCtrl"
    })


    .when("/register", {
        templateUrl: "partials/registration.html",
        controller: "PageCtrl"
    })






    // else 404
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });
}]);





/**
 * Controls the header
 */
app.controller('HeaderController', function($scope, $location, $http) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});



/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function( /* $scope, $location, $http */ ) {
    console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function( /* $scope, $location, $http */ ) {

 
    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    });

    $('.equal').matchHeight();




});




app.controller('registerCtrl', function($scope){
  // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }

  };
});







app.controller('HomeCarouselCtrl', function($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {

        slides.push({
            image: '//placehold.it/1920x700/222',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
            id: currIndex++
        });
    };



    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }


});



app.controller('TopFiveCtrl', function($scope) {

    $('#TopFiveCarousel').owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        responsiveClass: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true

            }
        }
    })

});




app.controller('TopFiftyCtrl', function($scope) {

    $('#TopFiftyCarousel').owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 10,
                nav: true

            }
        }
    })

});






