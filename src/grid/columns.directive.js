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
import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-ng-base';
var input = ['allowFiltering', 'allowGrouping', 'allowSorting', 'columns', 'customAttributes', 'disableHtmlEncode', 'displayAsCheckBox', 'field', 'filterBarTemplate', 'format', 'formatter', 'headerText', 'template', 'textAlign', 'type', 'uid', 'valueAccessor', 'visible', 'width'];
/**
 * `e-column` directive represent a column of the Angular Grid.
 * It must be contained in a Grid component(`ej-grid`).
 * ```html
 * <ej-grid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='100'></e-column>
 *    <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 * </ej-grid>
 * ```
 */
var ColumnDirective = (function (_super) {
    __extends(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ColumnDirective;
}(ComplexBase));
export { ColumnDirective };
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-columns>e-column',
                inputs: input,
                queries: {}
            },] },
];
/** @nocollapse */
ColumnDirective.ctorParameters = function () { return []; };
/**
 * Column Array Directive
 * @private
 */
var ColumnsDirective = (function (_super) {
    __extends(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super.call(this, 'columns') || this;
    }
    return ColumnsDirective;
}(ArrayBase));
export { ColumnsDirective };
ColumnsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-grid>e-columns',
                queries: {
                    children: new ContentChildren(ColumnDirective)
                },
            },] },
];
/** @nocollapse */
ColumnsDirective.ctorParameters = function () { return []; };
//# sourceMappingURL=columns.directive.js.map