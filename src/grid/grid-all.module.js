import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService, PageService, SelectionService, SortService, GroupService, ReorderService, RowDDService } from './grid.component';
import { GridModule } from './grid.module';
/**
 * NgModule definition for the Grid component with providers.
 */
var GridAllModule = (function () {
    function GridAllModule() {
    }
    return GridAllModule;
}());
export { GridAllModule };
GridAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, GridModule],
                exports: [
                    GridModule
                ],
                providers: [
                    FilterService,
                    PageService,
                    SelectionService,
                    SortService,
                    GroupService,
                    ReorderService,
                    RowDDService
                ]
            },] },
];
/** @nocollapse */
GridAllModule.ctorParameters = function () { return []; };
//# sourceMappingURL=grid-all.module.js.map