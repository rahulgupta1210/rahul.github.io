webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.modules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_request_new_request_component__ = __webpack_require__("./src/app/new-request/new-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__existing_existing_component__ = __webpack_require__("./src/app/existing/existing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_feedback_component__ = __webpack_require__("./src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commonelement_commonelement_component__ = __webpack_require__("./src/app/commonelement/commonelement.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/newRequest', pathMatch: 'full' },
    { path: 'newRequest', component: __WEBPACK_IMPORTED_MODULE_2__new_request_new_request_component__["a" /* NewRequestComponent */] },
    { path: 'existingRequest', component: __WEBPACK_IMPORTED_MODULE_3__existing_existing_component__["a" /* ExistingComponent */] },
    { path: 'feedback', component: __WEBPACK_IMPORTED_MODULE_4__feedback_feedback_component__["a" /* FeedbackComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_5__product_product_component__["a" /* ProductComponent */] },
    { path: 'common', component: __WEBPACK_IMPORTED_MODULE_6__commonelement_commonelement_component__["a" /* CommonelementComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".feedback-button {\r\n    height: 40px; \r\n    border: solid 3px #3f51b5; \r\n    background: #565455; \r\n    width: 100px; \r\n    line-height: 32px; \r\n    -webkit-transform: rotate(-90deg); \r\n    font-weight: 600; \r\n    color: white; \r\n    transform:rotate(-90deg);  \r\n    -ms-transform:rotate(-90deg);  \r\n    -moz-transform:rotate(-90deg); \r\n    text-align: center; \r\n    font-size: 17px; \r\n    position: fixed; \r\n    right: -40px; \r\n    top: 45%; \r\n    font-family: \"Roboto\", helvetica, arial, sans-serif; \r\n    z-index: 999; \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav>\n<app-header></app-header>\n</nav>\n<div>\n\t<router-outlet></router-outlet>\n</div>\n\n<button class=\"feedback-button\" routerLink=\"feedback\">Feedback</button> \n\n<div class=\"footer-margin\">\n\t<app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_modules__ = __webpack_require__("./src/app/app-routing.modules.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_request_new_request_component__ = __webpack_require__("./src/app/new-request/new-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__existing_existing_component__ = __webpack_require__("./src/app/existing/existing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feedback_feedback_component__ = __webpack_require__("./src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_product_service__ = __webpack_require__("./src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_transaction_service__ = __webpack_require__("./src/app/services/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__commonelement_commonelement_component__ = __webpack_require__("./src/app/commonelement/commonelement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_inputDir__ = __webpack_require__("./src/app/directives/inputDir.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { MatProgressBarModule } from "@angular/material";











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__new_request_new_request_component__["a" /* NewRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_8__existing_existing_component__["a" /* ExistingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__feedback_feedback_component__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_12__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_15__commonelement_commonelement_component__["a" /* CommonelementComponent */],
                __WEBPACK_IMPORTED_MODULE_16__directives_inputDir__["a" /* myDirectiveInfo */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_modules__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_14__services_transaction_service__["a" /* TransactionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commonelement/commonelement.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commonelement/commonelement.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p myDirective>\n        commonelement works!\n      </p>\n      <span myDirective>Test Me</span>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/commonelement/commonelement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonelementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonelementComponent = /** @class */ (function () {
    function CommonelementComponent() {
    }
    CommonelementComponent.prototype.ngOnInit = function () {
    };
    CommonelementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-commonelement',
            template: __webpack_require__("./src/app/commonelement/commonelement.component.html"),
            styles: [__webpack_require__("./src/app/commonelement/commonelement.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommonelementComponent);
    return CommonelementComponent;
}());



/***/ }),

/***/ "./src/app/directives/inputDir.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myDirectiveInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var myDirectiveInfo = /** @class */ (function () {
    function myDirectiveInfo(el) {
        this.el = el;
        el.nativeElement.style.backgroundColor = 'blue';
    }
    myDirectiveInfo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[myDirective]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], myDirectiveInfo);
    return myDirectiveInfo;
}());



/***/ }),

/***/ "./src/app/existing/existing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/existing/existing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Employee List</h2>\n            \n    <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Add Info</button>\n    <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#userModal\">Add User</button>\n<hr>\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Firstname</th>\n          <th>Lastname</th>\n          <th>Email</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor =\"let d of data\">\n          <td>{{d.created_at}}</td>\n          <td>{{d.updated_at}}</td>\n          <td>{{d.remaining_quantity}}</td>\n          <td><span class=\"glyphicon glyphicon-name\" routerLink=\"feedback\">x</span>\n           \n            \n          </td>\n        </tr>\n       \n      </tbody>\n    </table>\n\n\n   \n    \n    <!-- Modal -->\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n    \n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Add Details</h4>\n          </div>\n          <div class=\"modal-body\">\n              <form novalidate\n              [formGroup]=\"myform\" (ngSubmit) = \"onClickSubmit(myform.value)\">\n        \n          <fieldset formGroupName=\"name\">\n            <div class=\"form-group\"\n                 [ngClass]=\"{\n                'has-danger': firstName.invalid && (firstName.dirty || firstName.touched),\n                'has-success': firstName.valid && (firstName.dirty || firstName.touched)\n              }\">\n              <label>First Name</label>\n              <input type=\"text\"\n                     class=\"form-control\"\n                     formControlName=\"firstName\"\n                     [(ngModel)]=\"firstName\"\n                     required>\n              <div class=\"form-control-feedback\"\n                   *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\">\n                <p *ngIf=\"firstName.errors.required\">First Name is required</p>\n              </div>\n        \n             \n            </div>\n        \n            <div class=\"form-group\"\n                 [ngClass]=\"{\n                'has-danger': lastName.invalid && (lastName.dirty || lastName.touched),\n                'has-success': lastName.valid && (lastName.dirty || lastName.touched)\n              }\">\n              <label>Last Name</label>\n              <input type=\"text\"\n                     class=\"form-control\"\n                     formControlName=\"lastName\"\n                     [(ngModel)]=\"lastName\"\n                     required>\n              <div class=\"form-control-feedback\"\n                   *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\">\n                <p *ngIf=\"lastName.errors.required\">Last Name is required</p>\n              </div>\n            </div>\n          </fieldset>\n        \n        \n          <div class=\"form-group\"\n               [ngClass]=\"{\n                'has-danger': email.invalid && (email.dirty || email.touched),\n                'has-success': email.valid && (email.dirty || email.touched)\n           }\">\n            <label>Email</label>\n            <input type=\"email\"\n                   class=\"form-control\"\n                   formControlName=\"email\"\n                   [(ngModel)]=\"email\"\n                   required>\n            <div class=\"form-control-feedback\"\n                 *ngIf=\"email.errors && (email.dirty || email.touched)\">\n              <p *ngIf=\"email.errors.required\">Email is required</p>\n              <p *ngIf=\"password.errors.pattern\">The email address must contain at least the @ character</p>\n            </div>\n        \n            <!--\n              <pre>Valid? {{ myform.controls.email.valid }}</pre>\n              <pre>Dirty? {{ myform.controls.email.dirty }}</pre>\n            -->\n        \n          </div>\n        \n          <div class=\"form-group\"\n               [ngClass]=\"{\n                'has-danger': password.invalid && (password.dirty || password.touched),\n                'has-success': password.valid && (password.dirty || password.touched)\n           }\">\n            <label>Password</label>\n            <input type=\"password\"\n                   class=\"form-control\"\n                   formControlName=\"password\"\n                   [(ngModel)]=\"password\"\n                   required>\n            <div class=\"form-control-feedback\"\n                 *ngIf=\"password.errors && (password.dirty || password.touched)\">\n              <p *ngIf=\"password.errors.required\">Password is required</p>\n              <p *ngIf=\"password.errors.minlength\">Password must be 8 characters long, we need another {{password.errors.minlength.requiredLength - password.errors.minlength.actualLength}} characters </p>\n            </div>\n          </div>\n        \n         \n        </form>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n    \n      </div>\n    </div>\n\n\n    <div id=\"userModal\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Add Details</h4>\n          </div>\n          <div class=\"modal-body\">\n              <form #myForm=\"ngForm\" (ngSubmit)=\"actionOnSubmit(myForm)\" novalidate>\n                  <p>Is \"myForm\" valid? {{myForm.valid}}</p>\n                 \n                  <div class=\"form-group\">\n                      <label for=\"email\">Name:</label>\n                  <input type=\"text\" class=\"form-control\" name=\"name\" ngModel required/>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"email\">Birth Day:</label>\n                  <input type=\"text\" class=\"form-control\" name=\"birthYear\" ngModel required pattern=\"\\\\d{4,4}\"/>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"email\">Location:</label>\n                    <input type=\"text\" class=\"form-control\" name=\"country\" ngModel required/>\n                  </div>\n                \n                  <div class=\"form-group\">\n                      <label for=\"email\">Phone Number:</label>\n                    <input type=\"text\" class=\"form-control\" name=\"phoneNumber[{{phoneId}}]\" ngModel required/>\n                  </div>\n                </form>\n               \n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n    \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/existing/existing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExistingComponent = /** @class */ (function () {
    function ExistingComponent() {
        this.langs = [
            'English',
            'French',
            'German',
        ];
    }
    ExistingComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
        // this.onClickSubmit();
        this.data = [
            {
                "created_at": 1518847480422,
                "updated_at": 1518847480471,
                "remaining_quantity": 14,
                "price_per_unit": 71.67
            },
            {
                "created_at": 1518847470499,
                "updated_at": 1518847470499,
                "remaining_quantity": 218,
                "price_per_unit": 71.63
            },
            {
                "created_at": 1518847468295,
                "updated_at": 1518847468295,
                "remaining_quantity": 825,
                "price_per_unit": 71.62
            },
            {
                "created_at": 1518847174440,
                "updated_at": 1518847406250,
                "remaining_quantity": 2259,
                "price_per_unit": 71.6
            }
        ];
    };
    ExistingComponent.prototype.createFormControls = function () {
        this.firstName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required
            // Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(8)
        ]);
        // this.language = new FormControl('');
    };
    ExistingComponent.prototype.createForm = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
                firstName: this.firstName,
                lastName: this.lastName,
            }),
            email: this.email,
            password: this.password
            // language: this.language
        });
    };
    ExistingComponent.prototype.onClickSubmit = function (data) {
        console.log(data);
    };
    ExistingComponent.prototype.actionOnSubmit = function (form) {
        console.log(form);
    };
    ExistingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-existing',
            template: __webpack_require__("./src/app/existing/existing.component.html"),
            styles: [__webpack_require__("./src/app/existing/existing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExistingComponent);
    return ExistingComponent;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.css":
/***/ (function(module, exports) {

module.exports = ".padding {\r\n\tpadding: 20px;\r\n}\r\n\r\n.sebm-google-map-container {\r\n  height: 500px;\r\n}\r\n\r\n@media screen and (max-width: 750px) {\r\n    .sebm-google-map-container {\r\n\t  height: 250px;\r\n\t}\r\n}\r\n\r\nul {\r\n\tmargin: 0 15px;\r\n\tborder-top: 2px solid #CACACA;\r\n\tborder-right: 2px solid #CACACA;\r\n}\r\n\r\nli {\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n}\r\n\r\nli span {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\tpadding-bottom: 10px;\r\n\tpadding-top: 10px;\r\n\tborder-bottom: 2px solid #CACACA;\r\n}\r\n\r\nul li .bar {\r\n\twidth: 10px;\r\n\tborder-bottom: none;\r\n}\r\n\r\nul li .date {\r\n\ttext-align: center;\r\n}\r\n\r\nul li .amount {\r\n\ttext-align: right;\r\n\tpadding-right: 10px;\r\n\tfont-weight: 700;\r\n}\r\n\r\nul li .transactionType {\r\n\ttext-align: left;\r\n}\r\n\r\nul li .amount,\r\nul li span p {\r\n\tfont-size: 16px;\r\n}\r\n\r\nul li span p strong {\r\n\tline-height:  20px;\r\n\tdisplay: block;\r\n\tfont-weight: 700;\r\n}\r\n\r\nul li .amount,\r\nul li .date,\r\nul li .image {\r\n\twidth: 12%;\r\n}\r\n\r\nsection {\r\n\tbackground-color: #fff;\r\n\tpadding: 0 0 15px;\r\n\t-webkit-box-shadow: 0 0 10px #888888;\r\n\t        box-shadow: 0 0 10px #888888;\r\n}\r\n\r\nh3 {\r\n\tfont-size: 24px;\r\n\tdisplay: block;\r\n\tcolor: #ffffff;\r\n\tpadding: 20px 0;\r\n\ttext-align: center;\r\n\tbackground: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNEQyNjY2RjYxNUYxMUU3QURBM0Q5REE5NDk2MjI2MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNEQyNjY3MDYxNUYxMUU3QURBM0Q5REE5NDk2MjI2MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM0RDI2NjZENjE1RjExRTdBREEzRDlEQTk0OTYyMjYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM0RDI2NjZFNjE1RjExRTdBREEzRDlEQTk0OTYyMjYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SCm6swAAATBJREFUeNpi/P//PwM+cPXVu8W//v5VYyACiHJz1snw8ezEp4YJn+SXX7+5ibUMBF5//d5ESA0LsYYZSoqa43PY7bcf9hFjDguyJnTJb7//KOGTJ1YdMyPjH05Wlp8gNuPbb9/ln3/+1kJK0JEDeNhYtwHjt4PlyccvM/7+/y/EQGMA9LnXq6/f7zDRwzIYePf9Rx4TA53BqIVD30LGZ5++2NHVws8/f3ETo5CNmek7MyMTw/c/fzjRMvTX77//sAOzF1HFJAuxZaAED1cpLzvbWXT1oDL2yacvFaCMPSjjkOjaAhhknKDgw1Zr/Pr7T4XqFoLqOmBcWWBxCC8pBT8LKcFBbDyNljR0A8Ca/x0TGzPzLXpZyM/BvoRJXoA3A1T909oyIU6OScAmxnKAAAMAxUGI769ppPYAAAAASUVORK5CYII=') no-repeat #0C8397 15px 50%;\r\n}"

/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <section class=\"transactions-container\">\n        <ul>\n            <li *ngFor=\"let log of transaction| async\">\n                <span class=\"bar\" [style.backgroundColor]=\"log.categoryCode\"></span>\n                <span class=\"date\">{{log.transactionDate | date:'MMM d'}}</span>\n                <span class=\"image\"><img width=\"40\" [src]=\"log.merchantLogo\"></span>\n                <span class=\"transactionType\">\n                    <p>\n                        <strong>{{log.merchant}}</strong>\n                        {{log.transactionType}}\n                    </p>\n                </span>\n                <!-- <span class=\"amount\">{{log.amount | addMinus | currency:'USD':true}}</span> -->\n            </li>\n        </ul>\n    </section>\n \n  </div>\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_transaction_service__ = __webpack_require__("./src/app/services/transaction.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(transactionService) {
        this.transactionService = transactionService;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.transaction = this.transactionService.get();
    };
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feedback',
            template: __webpack_require__("./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__("./src/app/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_transaction_service__["a" /* TransactionService */]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer{\r\n\tbackground-color: #222;\r\n\t-webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n\t        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tpadding: 5px 100px 5px 100px;\r\n\topacity : 0.6;\r\n\tposition:fixed;\r\n    left:0px;\r\n    bottom:0px;\r\n    z-index: 100;\r\n}\r\n\r\n.footer .footer-company-name {\r\n\tcolor:  #ffffff;\r\n\tfont-size: 11px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n\twidth: 100%;\r\n}\r\n\r\n.padding-zero {\r\n    padding: 0px 0px 0px 0px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.social-icon {\r\n    font-size: 14px;\r\n    margin: 10px;\r\n    color: #fff;\r\n}\r\n\r\n.social-icons {\r\n\tdisplay: block;\r\n}\r\n\r\n.terms-and-conditions {\r\n\tmargin-left: 5px;\r\n    color: white;\r\n}\r\n\r\n@media (max-width: 1199px) {\r\n\t.social-icons {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-zero\">\n    <footer class=\"footer\">\n      <!-- <p class=\"footer-company-name\">\n        {{ 'COMMON.MULTI_SHOP_TITLE' | translate }} &copy; 2018\n        <a matTooltip=\"{{ 'USER_RELATED.TERMS_AND_CONDITIONS_TEXT' | translate }}\" class=\"terms-and-conditions\" [routerLink]=\"['/terms-and-conditions']\" target=\"_blank\"><i class=\"fa fa-info-circle\"></i></a>\n      </p> -->\n      <div class=\"social-icons\">\n        <a class=\"social-icon\" href=\"https://www.facebook.com/tendymart/\" target=\"_blank\">\n            <i class=\"fa fa fa-facebook\" aria-hidden=\"true\"></i>\n          </a>\n          <a class=\"social-icon\" href=\"\" target=\"_blank\">\n            <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n          </a>\n          <a class=\"social-icon\" href=\"https://plus.google.com/110479693904793055912\" target=\"_blank\">\n            <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n          </a>\n          <a class=\"social-icon\" href=\"https://www.linkedin.com/in/kamlesh-verma-7481045b\" target=\"_blank\">\n            <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n          </a>\n      </div>\n    </footer>\n  </div>\n   "

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "header {\r\n    border-bottom: 1px snow black;\r\n    background-color: #ffffff;\r\n    -webkit-box-shadow: 0 1px 4px rgba(41, 51, 57, 0.5);\r\n            box-shadow: 0 1px 4px rgba(41, 51, 57, 0.5);\r\n    font-size: 30px;\r\n  }\r\n\r\n .brand-logo {\r\n    width: 17%;\r\n  }\r\n\r\n /* @media (max-width: 1199px) {\r\n      \r\n      header {\r\n        border-bottom: 1px snow black;\r\n        background-color: #ffffff;\r\n        box-shadow: 0 1px 4px rgba(41, 51, 57, 0.5);\r\n        font-size: 20px;\r\n      }\r\n  \r\n  }  */\r\n\r\n .dropdown-menu {\r\n      border-radius: 0;\r\n    left: -131px;\r\n  }\r\n\r\n .dropdown-menu:before {\r\n    position: absolute;\r\n    top: -7px;\r\n    left: 136px;\r\n    display: inline-block;\r\n    border-right: 7px solid transparent;\r\n    border-bottom: 7px solid #ccc;\r\n    border-left: 7px solid transparent;\r\n    border-bottom-color: rgba(0, 0, 0, 0.2);\r\n    content: '';\r\n  }\r\n\r\n .dropdown-menu:after {\r\n    position: absolute;\r\n    top: -6px;\r\n    left: 137px;\r\n    display: inline-block;\r\n    border-right: 6px solid transparent;\r\n    border-bottom: 6px solid #ffffff;\r\n    border-left: 6px solid transparent;\r\n    content: '';\r\n  }\r\n\r\n .block-inline-display {\r\n    padding: 5px;\r\n    display: inline-block;\r\n  }\r\n\r\n .language-icon {\r\n    margin-left: 10px;\r\n  }\r\n\r\n .icon-color {\r\n    color: #3f51b5;\r\n  }\r\n\r\n /* .brand-logo {\r\n    width: 37%;\r\n  } */\r\n\r\n /* @media (max-width: 1199px) {\r\n    .brand-logo {\r\n      width: 45%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 500px) {\r\n    .brand-logo {\r\n      width: 85%;\r\n    }\r\n  } */\r\n  \r\n  "

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/newRequest\" href=\"#\">New Request <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/existingRequest\" href=\"#\">Existing Request</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/product\" href=\"#\">Product</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/common\" href=\"#\">Common Component</a>\n        </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/new-request/new-request.component.css":
/***/ (function(module, exports) {

module.exports = ".carousel-inner img {\r\n    width: 100%;\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/new-request/new-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n    \n      <!-- Indicators -->\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n      </ul>\n      \n      <!-- The slideshow -->\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"./assets/images/camera2.jpg\" alt=\"Los Angeles\" width=\"1100\" height=\"500\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"./assets/images/camera3.jpg\" alt=\"Chicago\" width=\"1100\" height=\"500\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"./assets/images/camera4.jpg\" alt=\"New York\" width=\"1100\" height=\"500\">\n        </div>\n      </div>\n      \n      <!-- Left and right controls -->\n      <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\"></span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\"></span>\n      </a>\n    </div>"

/***/ }),

/***/ "./src/app/new-request/new-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewRequestComponent = /** @class */ (function () {
    function NewRequestComponent() {
    }
    NewRequestComponent.prototype.ngOnInit = function () {
    };
    NewRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-request',
            template: __webpack_require__("./src/app/new-request/new-request.component.html"),
            styles: [__webpack_require__("./src/app/new-request/new-request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewRequestComponent);
    return NewRequestComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Employee List</h2>\n          \n  <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Add Info</button>\n  <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#userModal\">Add User</button>\n<hr>\n<div class=\"row\">\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>User Name</th>\n        <th>Email</th>\n        <th>Phone</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor =\"let d of product\">\n        <td>{{d.name}}</td>\n        <td>{{d.username}}</td>\n        <td>{{d.email}}</td>\n        <td>{{d.phone}}</td>\n        <td><span class=\"glyphicon glyphicon-name\" routerLink=\"feedback\">x</span></td>\n      </tr>\n     \n    </tbody>\n  </table>\n</div>\n<!-- <div class=\"row\">\n<div>\n  <input type=\"text\" [(ngModel)]=data/>\n  <button (click)=\"add(data)\" value=\"Add\">Add</button>{{product}}\n</div>\n\n</div> -->\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("./src/app/product/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {HttpClientModule, HttpClient} from '@angular/common/http';
var ProductComponent = /** @class */ (function () {
    //arr: string[];
    function ProductComponent(http, productService) {
        this.http = http;
        this.productService = productService;
        this.arr = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        // this.http.get('http://jsonplaceholder.typicode.com/users').
        // map((response => response.json()) ,
        var _this = this;
        //console.log(response);
        // this.product = this.productService.getDetails();
        // console.log("data" + " " + this.product);
        this.http.get('https://api.github.com/users/seeschweiler').subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log("Error occured.");
        });
        this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(function (response) {
            _this.product = response.json();
            console.log(_this.product);
            console.log(response);
        }, function (err) {
            console.log("Error occured.");
        });
    };
    ProductComponent.prototype.add = function (d) {
        this.arr.push(d);
        this.data = '';
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getDetails = function () {
        this.http.get('http://jsonplaceholder.typicode.com/users').map((function (response) { return response.json(); }));
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/transaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionService = /** @class */ (function () {
    function TransactionService(_http) {
        this._http = _http;
    }
    TransactionService.prototype.get = function () {
        return this._http.get('assets/transactions.json')
            .map(function (res) { return res.json().data; })
            .do(console.log);
    };
    TransactionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map