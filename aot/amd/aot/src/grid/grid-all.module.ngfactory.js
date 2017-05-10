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
define(["require", "exports", "@angular/core", "../../../src/grid/grid-all.module", "@angular/common", "../../../src/grid/grid.module", "@syncfusion/ej2-grids/src/grid/actions/filter", "@syncfusion/ej2-grids/src/grid/actions/page", "@syncfusion/ej2-grids/src/grid/actions/selection", "@syncfusion/ej2-grids/src/grid/actions/sort", "@syncfusion/ej2-grids/src/grid/actions/group", "@syncfusion/ej2-grids/src/grid/actions/reorder", "@syncfusion/ej2-grids/src/grid/actions/row-reorder"], function (require, exports, import0, import1, import2, import3, import4, import5, import6, import7, import8, import9, import10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GridAllModuleInjector = (function (_super) {
        __extends(GridAllModuleInjector, _super);
        function GridAllModuleInjector(parent) {
            return _super.call(this, parent, [], []) || this;
        }
        Object.defineProperty(GridAllModuleInjector.prototype, "_NgLocalization_3", {
            get: function () {
                if ((this.__NgLocalization_3 == null)) {
                    (this.__NgLocalization_3 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
                }
                return this.__NgLocalization_3;
            },
            enumerable: true,
            configurable: true
        });
        GridAllModuleInjector.prototype.createInternal = function () {
            this._CommonModule_0 = new import2.CommonModule();
            this._GridModule_1 = new import3.GridModule();
            this._GridAllModule_2 = new import1.GridAllModule();
            this._Filter_4 = import4.Filter;
            this._Page_5 = import5.Page;
            this._Selection_6 = import6.Selection;
            this._Sort_7 = import7.Sort;
            this._Group_8 = import8.Group;
            this._Reorder_9 = import9.Reorder;
            this._RowDD_10 = import10.RowDD;
            return this._GridAllModule_2;
        };
        GridAllModuleInjector.prototype.getInternal = function (token, notFoundResult) {
            if ((token === import2.CommonModule)) {
                return this._CommonModule_0;
            }
            if ((token === import3.GridModule)) {
                return this._GridModule_1;
            }
            if ((token === import1.GridAllModule)) {
                return this._GridAllModule_2;
            }
            if ((token === import2.NgLocalization)) {
                return this._NgLocalization_3;
            }
            if ((token === import4.Filter)) {
                return this._Filter_4;
            }
            if ((token === import5.Page)) {
                return this._Page_5;
            }
            if ((token === import6.Selection)) {
                return this._Selection_6;
            }
            if ((token === import7.Sort)) {
                return this._Sort_7;
            }
            if ((token === import8.Group)) {
                return this._Group_8;
            }
            if ((token === import9.Reorder)) {
                return this._Reorder_9;
            }
            if ((token === import10.RowDD)) {
                return this._RowDD_10;
            }
            return notFoundResult;
        };
        GridAllModuleInjector.prototype.destroyInternal = function () {
        };
        return GridAllModuleInjector;
    }(import0.ɵNgModuleInjector));
    exports.GridAllModuleNgFactory = new import0.NgModuleFactory(GridAllModuleInjector, import1.GridAllModule);
});
