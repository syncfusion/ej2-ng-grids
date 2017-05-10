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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@syncfusion/ej2-ng-base"], function (require, exports, core_1, ej2_ng_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var input = ['allowFiltering', 'allowGrouping', 'allowSorting', 'columns', 'customAttributes', 'disableHtmlEncode', 'displayAsCheckBox', 'field', 'filterBarTemplate', 'format', 'formatter', 'headerText', 'template', 'textAlign', 'type', 'uid', 'valueAccessor', 'visible', 'width'];
    var ColumnDirective = (function (_super) {
        __extends(ColumnDirective, _super);
        function ColumnDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ColumnDirective;
    }(ej2_ng_base_1.ComplexBase));
    ColumnDirective = __decorate([
        core_1.Directive({
            selector: 'e-columns>e-column',
            inputs: input,
            queries: {}
        })
    ], ColumnDirective);
    exports.ColumnDirective = ColumnDirective;
    var ColumnsDirective = (function (_super) {
        __extends(ColumnsDirective, _super);
        function ColumnsDirective() {
            return _super.call(this, 'columns') || this;
        }
        return ColumnsDirective;
    }(ej2_ng_base_1.ArrayBase));
    ColumnsDirective = __decorate([
        core_1.Directive({
            selector: 'ej-grid>e-columns',
            queries: {
                children: new core_1.ContentChildren(ColumnDirective)
            },
        }),
        __metadata("design:paramtypes", [])
    ], ColumnsDirective);
    exports.ColumnsDirective = ColumnsDirective;
});
