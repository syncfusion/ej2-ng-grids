var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "@angular/core", "../../../src/grid/grid.module", "@angular/common"], function (require, exports, import0, import1, import2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GridModuleInjector = (function (_super) {
        __extends(GridModuleInjector, _super);
        function GridModuleInjector(parent) {
            return _super.call(this, parent, [], []) || this;
        }
        Object.defineProperty(GridModuleInjector.prototype, "_NgLocalization_2", {
            get: function () {
                if ((this.__NgLocalization_2 == null)) {
                    (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
                }
                return this.__NgLocalization_2;
            },
            enumerable: true,
            configurable: true
        });
        GridModuleInjector.prototype.createInternal = function () {
            this._CommonModule_0 = new import2.CommonModule();
            this._GridModule_1 = new import1.GridModule();
            return this._GridModule_1;
        };
        GridModuleInjector.prototype.getInternal = function (token, notFoundResult) {
            if ((token === import2.CommonModule)) {
                return this._CommonModule_0;
            }
            if ((token === import1.GridModule)) {
                return this._GridModule_1;
            }
            if ((token === import2.NgLocalization)) {
                return this._NgLocalization_2;
            }
            return notFoundResult;
        };
        GridModuleInjector.prototype.destroyInternal = function () {
        };
        return GridModuleInjector;
    }(import0.ɵNgModuleInjector));
    exports.GridModuleNgFactory = new import0.NgModuleFactory(GridModuleInjector, import1.GridModule);
});
