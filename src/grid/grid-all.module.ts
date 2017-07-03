import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { GridComponent, FilterService, PageService, SelectionService, SortService, GroupService, ReorderService, RowDDService, DetailRowService } from './grid.component';
import { GridModule } from './grid.module';

/**
 * NgModule definition for the Grid component with providers.
 */
@NgModule({
    imports: [CommonModule, GridModule],
    exports: [
        GridModule
    ],
    providers:[
        FilterService,
        PageService,
        SelectionService,
        SortService,
        GroupService,
        ReorderService,
        RowDDService,
        DetailRowService
    ]
})
export class GridAllModule { }