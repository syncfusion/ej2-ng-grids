import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, ValueProvider, Optional, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-ng-base';
import { Grid, Filter, Page, Selection, Sort, Group, Reorder, RowDD, DetailRow, Toolbar, Aggregate, Search, VirtualScroll } from '@syncfusion/ej2-grids';
import { Template } from '@syncfusion/ej2-ng-base';
import { ColumnsDirective } from './columns.directive';
import { AggregatesDirective } from './aggregates.directive';

export const inputs: string[] = ['aggregates','allowFiltering','allowGrouping','allowPaging','allowReordering','allowRowDragAndDrop','allowSelection','allowSorting','allowTextWrap','childGrid','columns','dataSource','detailTemplate','editSettings','enableAltRow','enableColumnVirtualization','enableHover','enablePersistence','enableRtl','enableVirtualization','filterSettings','gridLines','groupSettings','height','locale','pageSettings','printMode','query','queryString','rowDropSettings','rowTemplate','searchSettings','selectedRowIndex','selectionSettings','sortSettings','toolbar','width'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','batchAdd','batchDelete','beforeBatchAdd','beforeBatchDelete','beforeBatchSave','beforeDataBound','beforePrint','beginEdit','cellDeselected','cellDeselecting','cellEdit','cellSave','cellSelected','cellSelecting','columnDrag','columnDragStart','columnDrop','created','dataBound','destroyed','detailDataBound','load','printComplete','queryCellInfo','rowDataBound','rowDeselected','rowDeselecting','rowDrag','rowDragStart','rowDrop','rowSelected','rowSelecting','toolbarClick','dataSourceChange'];
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
    @ContentChild('rowTemplate')
    @Template()
    public rowTemplate: any;
    @ContentChild('detailTemplate')
    @Template()
    public detailTemplate: any;

    constructor(private ngEle: ElementRef, private viewContainerRef:ViewContainerRef, @Optional() filter: Filter, @Optional() page: Page, @Optional() selection: Selection, @Optional() sort: Sort, @Optional() group: Group, @Optional() reorder: Reorder, @Optional() rowDD: RowDD, @Optional() detailRow: DetailRow, @Optional() toolbar: Toolbar, @Optional() aggregate: Aggregate, @Optional() search: Search, @Optional() virtualScroll: VirtualScroll) {
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

