webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            { image: "https://randomuser.me/api/portraits/men/1.jpg", title: "1", text: "1" },
            { image: "https://randomuser.me/api/portraits/men/2.jpg", title: "2", text: "2" },
            { image: "https://randomuser.me/api/portraits/men/3.jpg", title: "3", text: "3" },
            { image: "https://randomuser.me/api/portraits/men/4.jpg", title: "4", text: "4" },
            { image: "https://randomuser.me/api/portraits/men/5.jpg", title: "5", text: "5" },
            { image: "https://randomuser.me/api/portraits/men/6.jpg", title: "6", text: "6" },
        ];
    }
    HomePage_1 = HomePage;
    HomePage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(HomePage_1, {
            item: item
        });
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/CLOUD/Development.Ionic/Ionic3/Repositories/Repositories.FromGithub/repositories/ionic-toolbox/build-a-ionic-site-from-bootstrap-template/site/src/pages/home/home.html"*/'<ion-header>\n	<ion-navbar>\n		<div class="collapse bg-dark" id="navbarHeader">\n			<div class="container">\n				<div class="row">\n					<div class="col-sm-8 col-md-7 py-4">\n						<h4 class="text-white">About</h4>\n						<p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long\n							so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>\n					</div>\n					<div class="col-sm-4 offset-md-1 py-4">\n						<h4 class="text-white">Contact</h4>\n						<ul class="list-unstyled">\n							<li>\n								<a href="#" class="text-white">Follow on Twitter</a>\n							</li>\n							<li>\n								<a href="#" class="text-white">Like on Facebook</a>\n							</li>\n							<li>\n								<a href="#" class="text-white">Email me</a>\n							</li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n\n		<div class="navbar navbar-dark bg-dark box-shadow">\n			<div class="container d-flex justify-content-between">\n				<a href="#" class="navbar-brand d-flex align-items-center">\n					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\n					 stroke-linecap="round" stroke-linejoin="round" class="mr-2">\n						<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>\n						<circle cx="12" cy="13" r="4"></circle>\n					</svg>\n					<strong>Album</strong>\n				</a>\n				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader"\n				 aria-expanded="false" aria-label="Toggle navigation">\n					<span class="navbar-toggler-icon"></span>\n				</button>\n			</div>\n		</div>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<main role="main">\n\n		<section class="jumbotron text-center">\n			<div class="container">\n				<h1 class="jumbotron-heading">Bootstrap Template Album</h1>\n				<p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not\n					too short so folks don\'t simply skip over it entirely.</p>\n				<p>\n					<a href="#" class="btn btn-primary my-2">Main call to action</a>\n					<a href="#" class="btn btn-secondary my-2">Secondary action</a>\n				</p>\n			</div>\n		</section>\n\n		<div class="album py-5 bg-light">\n			<div class="container">\n\n				<div class="row">\n					<div clas="col-md-4" *ngFor="let card of cards" (click)="itemTapped($event, card)">\n						<div class="card mb-4 box-shadow">\n							<img class="card-img-top" src="{{ card.image }}" alt="{{ card.title }}">\n							<div class="card-body">\n								<p class="card-text">{{ card.text }}</p>\n								<div class="d-flex justify-content-between align-items-center">\n									<div class="btn-group">\n										<button type="button" class="btn btn-sm btn-outline-secondary">View</button>\n										<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>\n									</div>\n									<small class="text-muted">9 mins</small>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n\n	</main>\n\n\n\n	<footer class="text-muted">\n		<div class="container">\n			<p class="float-right">\n				<a href="#">Back to top</a>\n			</p>\n			<p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>\n			<p>New to Bootstrap?\n				<a href="../../">Visit the homepage</a> or read our\n				<a href="../../getting-started/">getting started guide</a>.</p>\n		</div>\n	</footer>\n\n</ion-content>\n'/*ion-inline-end:"/CLOUD/Development.Ionic/Ionic3/Repositories/Repositories.FromGithub/repositories/ionic-toolbox/build-a-ionic-site-from-bootstrap-template/site/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var HomePage_1, _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/CLOUD/Development.Ionic/Ionic3/Repositories/Repositories.FromGithub/repositories/ionic-toolbox/build-a-ionic-site-from-bootstrap-template/site/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/CLOUD/Development.Ionic/Ionic3/Repositories/Repositories.FromGithub/repositories/ionic-toolbox/build-a-ionic-site-from-bootstrap-template/site/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map