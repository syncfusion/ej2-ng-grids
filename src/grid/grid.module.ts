import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { GridComponent, FilterService, PageService, SelectionService, SortService, GroupService, ReorderService, RowDDService } from './grid.component';

/**
 * NgModule definition for the Grid component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        GridComponent,
        ColumnDirective,
        ColumnsDirective
    ],
    exports: [
        GridComponent,
        ColumnDirective,
        ColumnsDirective
    ]
})
export class GridModule { }