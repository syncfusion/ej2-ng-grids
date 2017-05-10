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
import { Component, ElementRef, ChangeDetectionStrategy, ContentChild, Optional } from '@angular/core';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-ng-base';
import { Grid, Filter, Page, Selection, Sort, Group, Reorder, RowDD } from '@syncfusion/ej2-grids';
import { ColumnsDirective } from './columns.directive';
export var inputs = ['allowFiltering', 'allowGrouping', 'allowPaging', 'allowReordering', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'columns', 'dataSource', 'enableAltRow', 'enableHover', 'enablePersistence', 'enableRtl', 'filterSettings', 'gridLines', 'groupSettings', 'height', 'locale', 'pageSettings', 'printMode', 'query', 'rowDropSettings', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'sortSettings', 'width'];
export var outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforePrint', 'cellDeselected', 'cellDeselecting', 'cellSelected', 'cellSelecting', 'columnDrag', 'columnDragStart', 'columnDrop', 'created', 'dataBound', 'destroyed', 'load', 'printComplete', 'queryCellInfo', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowSelected', 'rowSelecting', 'dataSourceChange'];
export var twoWays = ['dataSource'];
/**
 * `ej-grid` represents the Angular Grid Component.
 * ```html
 * <ej-grid [dataSource]='data' allowPaging='true' allowSorting='true'></ej-grid>
 * ```
 */
var GridComponent = (function (_super) {
    __extends(GridComponent, _super);
    function GridComponent(ngEle, filter, page, selection, sort, group, reorder, rowDD) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.tags = ['columns'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        for (var i = 1; i < arguments.length; i++) {
            var injectedObj = arguments[i];
            if (injectedObj) {
                _this.injectedModules.push(injectedObj);
            }
        }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        return _this;
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent.prototype.ngAfterViewInit = function () {
    };
    GridComponent.prototype.ngOnDestroy = function () {
    };
    GridComponent.prototype.ngAfterContentChecked = function () {
    };
    return GridComponent;
}(Grid));
export { GridComponent };
GridComponent.decorators = [
    { type: Component, args: [{
                selector: 'ej-grid',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new ContentChild(ColumnsDirective)
                }
            },] },
];
/** @nocollapse */
GridComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Filter, decorators: [{ type: Optional },] },
    { type: Page, decorators: [{ type: Optional },] },
    { type: Selection, decorators: [{ type: Optional },] },
    { type: Sort, decorators: [{ type: Optional },] },
    { type: Group, decorators: [{ type: Optional },] },
    { type: Reorder, decorators: [{ type: Optional },] },
    { type: RowDD, decorators: [{ type: Optional },] },
]; };
applyMixins(GridComponent, [ComponentBase]);
export var FilterService = { provide: Filter, useValue: Filter };
export var PageService = { provide: Page, useValue: Page };
export var SelectionService = { provide: Selection, useValue: Selection };
export var SortService = { provide: Sort, useValue: Sort };
export var GroupService = { provide: Group, useValue: Group };
export var ReorderService = { provide: Reorder, useValue: Reorder };
export var RowDDService = { provide: RowDD, useValue: RowDD };
//# sourceMappingURL=grid.component.js.map