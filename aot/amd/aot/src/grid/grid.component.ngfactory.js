define(["require", "exports", "@angular/core", "../../../src/grid/grid.component", "@syncfusion/ej2-grids/src/grid/actions/filter", "@syncfusion/ej2-grids/src/grid/actions/page", "@syncfusion/ej2-grids/src/grid/actions/selection", "@syncfusion/ej2-grids/src/grid/actions/sort", "@syncfusion/ej2-grids/src/grid/actions/group", "@syncfusion/ej2-grids/src/grid/actions/reorder", "@syncfusion/ej2-grids/src/grid/actions/row-reorder"], function (require, exports, import0, import1, import2, import3, import4, import5, import6, import7, import8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var styles_GridComponent = [];
    exports.RenderType_GridComponent = import0.ɵcrt({
        encapsulation: 2,
        styles: styles_GridComponent,
        data: {}
    });
    function View_GridComponent_0(l) {
        return import0.ɵvid(2, [], null, null);
    }
    exports.View_GridComponent_0 = View_GridComponent_0;
    function View_GridComponent_Host_0(l) {
        return import0.ɵvid(0, [
            (l()(), import0.ɵeld(0, null, null, 2, 'ej-grid', [], null, null, null, View_GridComponent_0, exports.RenderType_GridComponent)),
            import0.ɵdid(3268608, null, 1, import1.GridComponent, [
                import0.ElementRef,
                [
                    2,
                    import2.Filter
                ],
                [
                    2,
                    import3.Page
                ],
                [
                    2,
                    import4.Selection
                ],
                [
                    2,
                    import5.Sort
                ],
                [
                    2,
                    import6.Group
                ],
                [
                    2,
                    import7.Reorder
                ],
                [
                    2,
                    import8.RowDD
                ]
            ], null, null),
            import0.ɵqud(167772160, 1, { childColumns: 0 })
        ], function (ck, v) {
            ck(v, 1, 0);
        }, null);
    }
    exports.GridComponentNgFactory = import0.ɵccf('ej-grid', import1.GridComponent, View_GridComponent_Host_0, {
        allowFiltering: 'allowFiltering',
        allowGrouping: 'allowGrouping',
        allowPaging: 'allowPaging',
        allowReordering: 'allowReordering',
        allowRowDragAndDrop: 'allowRowDragAndDrop',
        allowSelection: 'allowSelection',
        allowSorting: 'allowSorting',
        allowTextWrap: 'allowTextWrap',
        columns: 'columns',
        dataSource: 'dataSource',
        enableAltRow: 'enableAltRow',
        enableHover: 'enableHover',
        enablePersistence: 'enablePersistence',
        enableRtl: 'enableRtl',
        filterSettings: 'filterSettings',
        gridLines: 'gridLines',
        groupSettings: 'groupSettings',
        height: 'height',
        locale: 'locale',
        pageSettings: 'pageSettings',
        printMode: 'printMode',
        query: 'query',
        rowDropSettings: 'rowDropSettings',
        rowTemplate: 'rowTemplate',
        searchSettings: 'searchSettings',
        selectedRowIndex: 'selectedRowIndex',
        selectionSettings: 'selectionSettings',
        sortSettings: 'sortSettings',
        width: 'width'
    }, {
        actionBegin: 'actionBegin',
        actionComplete: 'actionComplete',
        actionFailure: 'actionFailure',
        beforePrint: 'beforePrint',
        cellDeselected: 'cellDeselected',
        cellDeselecting: 'cellDeselecting',
        cellSelected: 'cellSelected',
        cellSelecting: 'cellSelecting',
        columnDrag: 'columnDrag',
        columnDragStart: 'columnDragStart',
        columnDrop: 'columnDrop',
        created: 'created',
        dataBound: 'dataBound',
        destroyed: 'destroyed',
        load: 'load',
        printComplete: 'printComplete',
        queryCellInfo: 'queryCellInfo',
        rowDataBound: 'rowDataBound',
        rowDeselected: 'rowDeselected',
        rowDeselecting: 'rowDeselecting',
        rowSelected: 'rowSelected',
        rowSelecting: 'rowSelecting',
        dataSourceChange: 'dataSourceChange'
    }, []);
});
