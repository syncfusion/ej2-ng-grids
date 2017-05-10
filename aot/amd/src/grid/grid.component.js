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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", "@angular/core", "@syncfusion/ej2-ng-base", "@syncfusion/ej2-grids", "./columns.directive"], function (require, exports, core_1, ej2_ng_base_1, ej2_grids_1, columns_directive_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inputs = ['allowFiltering', 'allowGrouping', 'allowPaging', 'allowReordering', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'columns', 'dataSource', 'enableAltRow', 'enableHover', 'enablePersistence', 'enableRtl', 'filterSettings', 'gridLines', 'groupSettings', 'height', 'locale', 'pageSettings', 'printMode', 'query', 'rowDropSettings', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'sortSettings', 'width'];
    exports.outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforePrint', 'cellDeselected', 'cellDeselecting', 'cellSelected', 'cellSelecting', 'columnDrag', 'columnDragStart', 'columnDrop', 'created', 'dataBound', 'destroyed', 'load', 'printComplete', 'queryCellInfo', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowSelected', 'rowSelecting', 'dataSourceChange'];
    exports.twoWays = ['dataSource'];
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
            _this.registerEvents(exports.outputs);
            _this.addTwoWay.call(_this, exports.twoWays);
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
    }(ej2_grids_1.Grid));
    GridComponent = __decorate([
        core_1.Component({
            selector: 'ej-grid',
            inputs: exports.inputs,
            outputs: exports.outputs,
            template: '',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            queries: {
                childColumns: new core_1.ContentChild(columns_directive_1.ColumnsDirective)
            }
        }),
        __param(1, core_1.Optional()), __param(2, core_1.Optional()), __param(3, core_1.Optional()), __param(4, core_1.Optional()), __param(5, core_1.Optional()), __param(6, core_1.Optional()), __param(7, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, ej2_grids_1.Filter, ej2_grids_1.Page, ej2_grids_1.Selection, ej2_grids_1.Sort, ej2_grids_1.Group, ej2_grids_1.Reorder, ej2_grids_1.RowDD])
    ], GridComponent);
    exports.GridComponent = GridComponent;
    ej2_ng_base_1.applyMixins(GridComponent, [ej2_ng_base_1.ComponentBase]);
    exports.FilterService = { provide: ej2_grids_1.Filter, useValue: ej2_grids_1.Filter };
    exports.PageService = { provide: ej2_grids_1.Page, useValue: ej2_grids_1.Page };
    exports.SelectionService = { provide: ej2_grids_1.Selection, useValue: ej2_grids_1.Selection };
    exports.SortService = { provide: ej2_grids_1.Sort, useValue: ej2_grids_1.Sort };
    exports.GroupService = { provide: ej2_grids_1.Group, useValue: ej2_grids_1.Group };
    exports.ReorderService = { provide: ej2_grids_1.Reorder, useValue: ej2_grids_1.Reorder };
    exports.RowDDService = { provide: ej2_grids_1.RowDD, useValue: ej2_grids_1.RowDD };
});
