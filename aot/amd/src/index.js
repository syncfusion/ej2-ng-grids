define(["require", "exports", "@syncfusion/ej2-grids", "./grid/columns.directive", "./grid/grid.component", "./grid/grid.module", "./grid/grid-all.module"], function (require, exports, ej2_grids_1, columns_directive_1, grid_component_1, grid_module_1, grid_all_module_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej2_grids_1);
    exports.ColumnDirective = columns_directive_1.ColumnDirective;
    exports.ColumnsDirective = columns_directive_1.ColumnsDirective;
    exports.GridComponent = grid_component_1.GridComponent;
    exports.FilterService = grid_component_1.FilterService;
    exports.PageService = grid_component_1.PageService;
    exports.SelectionService = grid_component_1.SelectionService;
    exports.SortService = grid_component_1.SortService;
    exports.GroupService = grid_component_1.GroupService;
    exports.ReorderService = grid_component_1.ReorderService;
    exports.RowDDService = grid_component_1.RowDDService;
    exports.GridModule = grid_module_1.GridModule;
    exports.GridAllModule = grid_all_module_1.GridAllModule;
});
