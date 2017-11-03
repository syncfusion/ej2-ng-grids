import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, ValueProvider, Optional, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-ng-base';
import { Grid, Filter, Page, Selection, Sort, Group, Reorder, RowDD, DetailRow, Toolbar, Aggregate, Search, VirtualScroll, Edit, Resize, ExcelExport, PdfExport, CommandColumn, ContextMenu } from '@syncfusion/ej2-grids';
import { Template } from '@syncfusion/ej2-ng-base';
import { ColumnsDirective } from './columns.directive';
import { AggregatesDirective } from './aggregates.directive';

export const inputs: string[] = ['aggregates','allowExcelExport','allowFiltering','allowGrouping','allowMultiSorting','allowPaging','allowPdfExport','allowReordering','allowResizing','allowRowDragAndDrop','allowSelection','allowSorting','allowTextWrap','childGrid','columns','contextMenuItems','dataSource','detailTemplate','editSettings','enableAltRow','enableColumnVirtualization','enableHover','enablePersistence','enableRtl','enableVirtualization','filterSettings','gridLines','groupSettings','height','locale','pageSettings','printMode','query','queryString','rowDropSettings','rowTemplate','searchSettings','selectedRowIndex','selectionSettings','showColumnChooser','sortSettings','textWrapSettings','toolbar','width'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','batchAdd','batchDelete','beforeBatchAdd','beforeBatchDelete','beforeBatchSave','beforeCopy','beforeDataBound','beforeOpenColumnChooser','beforePrint','beginEdit','cellDeselected','cellDeselecting','cellEdit','cellSave','cellSelected','cellSelecting','checkBoxChange','columnDrag','columnDragStart','columnDrop','contextMenuClick','contextMenuOpen','created','dataBound','destroyed','detailDataBound','excelQueryCellInfo','load','onResize','pdfQueryCellInfo','printComplete','queryCellInfo','resizeStart','resizeStop','rowDataBound','rowDeselected','rowDeselecting','rowDrag','rowDragStart','rowDrop','rowSelected','rowSelecting','toolbarClick','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * `ej-grid` represents the Angular Grid Component.
 * ```html
 * <ej-grid [dataSource]='data' allowPaging='true' allowSorting='true'></ej-grid>
 * ```
 */
@Component({
    selector: 'ej-grid',
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
     * The Row template which renders customized rows from given template. 
     * By default, Grid renders a table row for every data source item. 
     * > * It accepts either [template string](http://ej2.syncfusion.com/documentation/base/template-engine.html) or HTML element ID. 
     * > * The row template must be a table row.
     */
    @ContentChild('rowTemplate')
    @Template()
    public rowTemplate: any;
    /** 
     * The Detail Template allows user to show or hide additional information about a particular row. 
     * > * It accepts either [template string](http://ej2.syncfusion.com/documentation/base/template-engine.html) or HTML element ID. 
     * > * The Detail Template content cannot be wider than the total width of parent Grid, unless the Detail Template is scrollable.
     * 
     * ```html
     *<script id='detailTemplate'>
     *   <table width="100%" >
     *       <tbody>
     *           <tr>
     *               <td>
     *                   <span style="font-weight: 500;">First Name: </span> ${FirstName}
     *               </td>
     *               <td>
     *                   <span style="font-weight: 500;">Postal Code: </span> ${PostalCode}
     *               </td>
     *           </tr>
     *           <tr>
     *               <td>
     *                   <span style="font-weight: 500;">Last Name: </span> ${LastName}
     *               </td>
     *               <td>
     *                   <span style="font-weight: 500;">City: </span> ${City}
     *               </td>
     *           </tr>
     *       </tbody>
     *   </table>
     * </script>
     *
     *<div id="Grid"></div>
     *```
     *
     *```typescript
     *let grid: Grid = new Grid({
     * dataSource: employeeData,
     * detailTemplate: '#detailTemplate',
     * columns: [
     *  { field: 'FirstName', headerText: 'First Name', width: 110 },
     *  { field: 'LastName', headerText: 'Last Name', width: 110 },
     *  { field: 'Title', headerText: 'Title', width: 150 },
     *  { field: 'Country', headerText: 'Country', width: 110 }
     * ],
     * height: 315
     *});
     *grid.appendTo('#Grid');
     *```
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

    constructor(private ngEle: ElementRef, private viewContainerRef:ViewContainerRef, @Optional() filter: Filter, @Optional() page: Page, @Optional() selection: Selection, @Optional() sort: Sort, @Optional() group: Group, @Optional() reorder: Reorder, @Optional() rowDD: RowDD, @Optional() detailRow: DetailRow, @Optional() toolbar: Toolbar, @Optional() aggregate: Aggregate, @Optional() search: Search, @Optional() virtualScroll: VirtualScroll, @Optional() edit: Edit, @Optional() resize: Resize, @Optional() excelExport: ExcelExport, @Optional() pdfExport: PdfExport, @Optional() commandColumn: CommandColumn, @Optional() contextMenu: ContextMenu) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        for (let i: number = 2; i < arguments.length; i++) {
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

