import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, ValueProvider, ContentChild, Optional } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo } from '@syncfusion/ej2-ng-base';
import { getValue } from '@syncfusion/ej2-base/util';
import { Grid, Filter, Page, Selection, Sort, Group, Reorder, RowDD, DetailRow } from '@syncfusion/ej2-grids';

import { ColumnsDirective } from './columns.directive';

export const inputs: string[] = ['allowFiltering','allowGrouping','allowPaging','allowReordering','allowRowDragAndDrop','allowSelection','allowSorting','allowTextWrap','childGrid','columns','dataSource','detailTemplate','enableAltRow','enableHover','enablePersistence','enableRtl','filterSettings','gridLines','groupSettings','height','locale','pageSettings','printMode','query','queryString','rowDropSettings','rowTemplate','searchSettings','selectedRowIndex','selectionSettings','sortSettings','width'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','beforePrint','cellDeselected','cellDeselecting','cellSelected','cellSelecting','columnDrag','columnDragStart','columnDrop','created','dataBound','destroyed','detailDataBound','load','printComplete','queryCellInfo','rowDataBound','rowDeselected','rowDeselecting','rowDrag','rowDragStart','rowDrop','rowSelected','rowSelecting','dataSourceChange'];
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
        childColumns: new ContentChild(ColumnsDirective)
    }
})
export class GridComponent extends Grid implements IComponentBase {
    public childColumns: any;
    public tags: string[] = ['columns'];
    public dataSourceChange: any;

    constructor(private ngEle: ElementRef, private viewContainerRef:ViewContainerRef, @Optional() filter: Filter, @Optional() page: Page, @Optional() selection: Selection, @Optional() sort: Sort, @Optional() group: Group, @Optional() reorder: Reorder, @Optional() rowDD: RowDD, @Optional() detailRow: DetailRow) {
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

