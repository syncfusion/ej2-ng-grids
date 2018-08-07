import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, ValueProvider, Optional, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-ng-base';
import { Grid, Filter, Page, Selection, Sort, Group, Reorder, RowDD, DetailRow, Toolbar, Aggregate, Search, VirtualScroll, Edit, Resize, ExcelExport, PdfExport, CommandColumn, ContextMenu, Freeze, ColumnMenu, ColumnChooser, ForeignKey } from '@syncfusion/ej2-grids';
import { Template } from '@syncfusion/ej2-ng-base';
import { ColumnsDirective } from './columns.directive';
import { AggregatesDirective } from './aggregates.directive';

export const inputs: string[] = ['aggregates','allowExcelExport','allowFiltering','allowGrouping','allowMultiSorting','allowPaging','allowPdfExport','allowReordering','allowResizing','allowRowDragAndDrop','allowSelection','allowSorting','allowTextWrap','childGrid','columnMenuItems','columnQueryMode','columns','contextMenuItems','currencyCode','dataSource','detailTemplate','editSettings','enableAltRow','enableColumnVirtualization','enableHover','enablePersistence','enableRtl','enableVirtualization','filterSettings','frozenColumns','frozenRows','gridLines','groupSettings','height','locale','pageSettings','printMode','query','queryString','rowDropSettings','rowHeight','rowTemplate','searchSettings','selectedRowIndex','selectionSettings','showColumnChooser','showColumnMenu','sortSettings','textWrapSettings','toolbar','width'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','batchAdd','batchCancel','batchDelete','beforeBatchAdd','beforeBatchDelete','beforeBatchSave','beforeCopy','beforeDataBound','beforeExcelExport','beforeOpenColumnChooser','beforePdfExport','beforePrint','beginEdit','cellDeselected','cellDeselecting','cellEdit','cellSave','cellSaved','cellSelected','cellSelecting','checkBoxChange','columnDrag','columnDragStart','columnDrop','columnMenuClick','columnMenuOpen','contextMenuClick','contextMenuOpen','created','dataBound','dataSourceChanged','dataStateChange','destroyed','detailDataBound','excelExportComplete','excelHeaderQueryCellInfo','excelQueryCellInfo','headerCellInfo','load','pdfExportComplete','pdfHeaderQueryCellInfo','pdfQueryCellInfo','printComplete','queryCellInfo','recordDoubleClick','resizeStart','resizeStop','resizing','rowDataBound','rowDeselected','rowDeselecting','rowDrag','rowDragStart','rowDrop','rowSelected','rowSelecting','toolbarClick','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * `ejs-grid` represents the Angular Grid Component.
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
@Component({
    selector: 'ejs-grid',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childColumns: new ContentChild(ColumnsDirective), 
        childAggregates: new ContentChild(AggregatesDirective)
    }
})
export class GridComponent extends Grid implements IComponentBase {
    public childColumns: any;
    public childAggregates: any;
    public tags: string[] = ['columns', 'aggregates'];
    public dataSourceChange: any;
    /** 
     * The row template that renders customized rows from the given template. 
     * By default, Grid renders a table row for every data source item. 
     * > * It accepts either [template string](../base/template-engine.html) or HTML element ID. 
     * > * The row template must be a table row.
     * 
     * > Check the [`Row Template`](./row.html) customization.
     *     
     */
    @ContentChild('rowTemplate')
    @Template()
    public rowTemplate: any;
    /** 
     * The detail template allows you to show or hide additional information about a particular row.
     * 
     * > It accepts either the [template string](../base/template-engine.html) or the HTML element ID.
     *
     *{% codeBlock src="grid/detail-template-api/index.ts" %}{% endcodeBlock %}
     *     
     */
    @ContentChild('detailTemplate')
    @Template()
    public detailTemplate: any;
    @ContentChild('toolbarTemplate')
    @Template()
    public toolbarTemplate: any;
    @ContentChild('pagerTemplate')
    @Template()
    public pagerTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, @Optional() filter: Filter, @Optional() page: Page, @Optional() selection: Selection, @Optional() sort: Sort, @Optional() group: Group, @Optional() reorder: Reorder, @Optional() rowDD: RowDD, @Optional() detailRow: DetailRow, @Optional() toolbar: Toolbar, @Optional() aggregate: Aggregate, @Optional() search: Search, @Optional() virtualScroll: VirtualScroll, @Optional() edit: Edit, @Optional() resize: Resize, @Optional() excelExport: ExcelExport, @Optional() pdfExport: PdfExport, @Optional() commandColumn: CommandColumn, @Optional() contextMenu: ContextMenu, @Optional() freeze: Freeze, @Optional() columnMenu: ColumnMenu, @Optional() columnChooser: ColumnChooser, @Optional() foreignKey: ForeignKey) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        for (let i: number = 3; i < arguments.length; i++) {
            let injectedObj: Object = arguments[i];
            if (injectedObj) {
                this.injectedModules.push(<Function>injectedObj);
            }
        }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

applyMixins(GridComponent, [ComponentBase]);

export const FilterService: ValueProvider = { provide: Filter, useValue: Filter};
export const PageService: ValueProvider = { provide: Page, useValue: Page};
export const SelectionService: ValueProvider = { provide: Selection, useValue: Selection};
export const SortService: ValueProvider = { provide: Sort, useValue: Sort};
export const GroupService: ValueProvider = { provide: Group, useValue: Group};
export const ReorderService: ValueProvider = { provide: Reorder, useValue: Reorder};
export const RowDDService: ValueProvider = { provide: RowDD, useValue: RowDD};
export const DetailRowService: ValueProvider = { provide: DetailRow, useValue: DetailRow};
export const ToolbarService: ValueProvider = { provide: Toolbar, useValue: Toolbar};
export const AggregateService: ValueProvider = { provide: Aggregate, useValue: Aggregate};
export const SearchService: ValueProvider = { provide: Search, useValue: Search};
export const VirtualScrollService: ValueProvider = { provide: VirtualScroll, useValue: VirtualScroll};
export const EditService: ValueProvider = { provide: Edit, useValue: Edit};
export const ResizeService: ValueProvider = { provide: Resize, useValue: Resize};
export const ExcelExportService: ValueProvider = { provide: ExcelExport, useValue: ExcelExport};
export const PdfExportService: ValueProvider = { provide: PdfExport, useValue: PdfExport};
export const CommandColumnService: ValueProvider = { provide: CommandColumn, useValue: CommandColumn};
export const ContextMenuService: ValueProvider = { provide: ContextMenu, useValue: ContextMenu};
export const FreezeService: ValueProvider = { provide: Freeze, useValue: Freeze};
export const ColumnMenuService: ValueProvider = { provide: ColumnMenu, useValue: ColumnMenu};
export const ColumnChooserService: ValueProvider = { provide: ColumnChooser, useValue: ColumnChooser};
export const ForeignKeyService: ValueProvider = { provide: ForeignKey, useValue: ForeignKey};

