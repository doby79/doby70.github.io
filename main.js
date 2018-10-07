(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Alternative of npm / We are using yarn packageManager for more reliability and speed\n<!--the new command for Angular 6: ng config -g cli.packageManager yarn\n<!--yarn start\nDeployment via Github:\ngh-pages\nnow\nsurge.sh\nnetlify\n-->\n<div>\n  <div class=\"main-app\">\n    <div>\n      <h1>Tic Tac Toe in Angular 6</h1>\n    </div>\n    <board></board>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//fonts.googleapis.com/css?family=Arial|Helvetica+Sans:400italic,700italic,400,700);\n.main-app {\n  margin: 0 auto;\n  max-width: 300px;\n  color: red; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Tic Tac Toe - Angular 6';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/board/board.component */ "./src/app/game/board/board.component.ts");
/* harmony import */ var _game_cell_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/cell/cell.component */ "./src/app/game/cell/cell.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _game_board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"],
                _game_cell_cell_component__WEBPACK_IMPORTED_MODULE_6__["CellComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game/board/board.component.html":
/*!*************************************************!*\
  !*** ./src/app/game/board/board.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t\t<div class=\"status\" >\r\n\t\t\t{{statusMsg}}\r\n\t\t</div>\r\n  <!--We draw the elements.-->\r\n\t\t<div class=\"board\" *ngFor=\"let row of [0,1,2]\">\r\n\t\t\t<cell *ngFor=\"let col of [0,1,2]\"\r\n            [status]=\"squares[col+row*3]\"\r\n\t\t\t\t(click)=\"move(col+row*3)\"\r\n\t\t\t>\r\n\t\t\t</cell>\r\n\t\t</div>\r\n\t\t<button class=\"newGame\" (click)=\"newGame()\">New Game</button>\r\n</div>\r\n\t\r\n"

/***/ }),

/***/ "./src/app/game/board/board.component.scss":
/*!*************************************************!*\
  !*** ./src/app/game/board/board.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  background-color: #e4522e;\n  color: #fff; }\n\n.status {\n  margin: 0px;\n  padding: 15px;\n  background-color: red;\n  color: #fff;\n  font-size: 1.4em;\n  font-weight: bold; }\n\n.newGame {\n  background-color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.2em;\n  color: #fff;\n  border: 0px;\n  font-weight: bold;\n  margin: 0px;\n  padding: 17px;\n  width: 100%; }\n\n.newGame:hover {\n  cursor: pointer;\n  background-color: #e6a594; }\n"

/***/ }),

/***/ "./src/app/game/board/board.component.ts":
/*!***********************************************!*\
  !*** ./src/app/game/board/board.component.ts ***!
  \***********************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
        this.squares = Array(9).fill(null);
        this.player = 'X';
        this.winner = null;
        this.counter = 0;
    }
    Object.defineProperty(BoardComponent.prototype, "statusMsg", {
        //Status field activity
        get: function () {
            while (this.counter < 9) {
                return this.winner ? "Player " + this.winner + " has won!" :
                    "Player " + this.player + "'s turn";
            }
            return 'No winner';
            // return this.winner ? `Player ${this.winner} has won!` : this.counter === 9 ?
            //   'No winner' : `Player ${this.player}'s turn`;
            // return this.winner? `Player ${this.winner} has won!` :
            //   `Player ${this.player}'s turn`;
        },
        enumerable: true,
        configurable: true
    });
    //Handling the move of a player based on cell position
    BoardComponent.prototype.move = function (position) {
        this.counter++;
        if (!this.winner && !this.squares[position]) {
            this.squares[position] = this.player;
            if (this.winnigMove()) {
                this.winner = this.player;
            }
            this.player = this.player === 'X' ? 'O' : 'X';
        }
    };
    // During every move we need to check if the move is a winning one. We are checking if the players 'X' and 'O' have their moves
    BoardComponent.prototype.winnigMove = function () {
        var options = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6] // diagonal
        ];
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) { //for each we check [0,1,2]
            var option = options_1[_i];
            if (this.squares[option[0]] && this.squares[option[0]] ===
                this.squares[option[1]] && this.squares[option[1]] ===
                this.squares[option[2]]) {
                return true;
            }
        }
        return false;
    };
    //Restarting the game sets back to original in order to reset for a new game
    BoardComponent.prototype.newGame = function () {
        this.squares = Array(9).fill(null);
        this.player = 'X';
        this.winner = null;
        this.counter = 0;
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/game/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/game/board/board.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/game/cell/cell.component.html":
/*!***********************************************!*\
  !*** ./src/app/game/cell/cell.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cell\" >{{ status }}</div>\r\n"

/***/ }),

/***/ "./src/app/game/cell/cell.component.scss":
/*!***********************************************!*\
  !*** ./src/app/game/cell/cell.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell {\n  width: 100px;\n  height: 100px;\n  font-size: 4em;\n  font-family: Arial, Helvetica, sans-serif;\n  box-sizing: border-box;\n  border: 2px solid #e6a594;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.cell:hover {\n  background-color: #e4522e; }\n"

/***/ }),

/***/ "./src/app/game/cell/cell.component.ts":
/*!*********************************************!*\
  !*** ./src/app/game/cell/cell.component.ts ***!
  \*********************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CellComponent = /** @class */ (function () {
    function CellComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CellComponent.prototype, "status", void 0);
    CellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cell',
            template: __webpack_require__(/*! ./cell.component.html */ "./src/app/game/cell/cell.component.html"),
            styles: [__webpack_require__(/*! ./cell.component.scss */ "./src/app/game/cell/cell.component.scss")]
        })
    ], CellComponent);
    return CellComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\WebstormProjects\tic-tac-toe-game\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map