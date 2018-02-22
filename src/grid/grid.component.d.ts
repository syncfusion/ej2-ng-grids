import { ElementRef, ViewContainerRef, ValueProvider } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-ng-base';
import { Grid, Filter, Page, Selection, Sort, Group, Reorder, RowDD, DetailRow, Toolbar, Aggregate, Search, VirtualScroll, Edit, Resize, ExcelExport, PdfExport, CommandColumn, ContextMenu, Freeze, ColumnMenu, ColumnChooser, ForeignKey } from '@syncfusion/ej2-grids';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-grid` represents the Angular Grid Component.
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
export declare class GridComponent extends Grid implements IComponentBase {
    private ngEle;
    private viewContainerRef;
    childColumns: any;
    childAggregates: any;
    tags: string[];
    dataSourceChange: any;
    /**
     * The row template that renders customized rows from the given template.
     * By default, Grid renders a table row for every data source item.
     * > * It accepts either [template string](../base/template-engine.html) or HTML element ID.
     * > * The row template must be a table row.
     *
     * > Check the [`Row Template`](./row.html) customization.
     *
     */
    rowTemplate: any;
    /**
     * The detail template allows you to show or hide additional information about a particular row.
     *
     * > It accepts either the [template string](../base/template-engine.html) or the HTML element ID.
     *
     *{% codeBlock src="grid/detail-template-api/index.ts" %}{% endcodeBlock %}
     *
     */
    detailTemplate: any;
    toolbarTemplate: any;
    pagerTemplate: any;
    constructor(ngEle: ElementRef, viewContainerRef: ViewContainerRef, filter: Filter, page: Page, selection: Selection, sort: Sort, group: Group, reorder: Reorder, rowDD: RowDD, detailRow: DetailRow, toolbar: Toolbar, aggregate: Aggregate, search: Search, virtualScroll: VirtualScroll, edit: Edit, resize: Resize, excelExport: ExcelExport, pdfExport: PdfExport, commandColumn: CommandColumn, contextMenu: ContextMenu, freeze: Freeze, columnMenu: ColumnMenu, columnChooser: ColumnChooser, foreignKey: ForeignKey);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
export declare const FilterService: ValueProvider;
export declare const PageService: ValueProvider;
export declare const SelectionService: ValueProvider;
export declare const SortService: ValueProvider;
export declare const GroupService: ValueProvider;
export declare const ReorderService: ValueProvider;
export declare const RowDDService: ValueProvider;
export declare const DetailRowService: ValueProvider;
export declare const ToolbarService: ValueProvider;
export declare const AggregateService: ValueProvider;
export declare const SearchService: ValueProvider;
export declare const VirtualScrollService: ValueProvider;
export declare const EditService: ValueProvider;
export declare const ResizeService: ValueProvider;
export declare const ExcelExportService: ValueProvider;
export declare const PdfExportService: ValueProvider;
export declare const CommandColumnService: ValueProvider;
export declare const ContextMenuService: ValueProvider;
export declare const FreezeService: ValueProvider;
export declare const ColumnMenuService: ValueProvider;
export declare const ColumnChooserService: ValueProvider;
export declare const ForeignKeyService: ValueProvider;
