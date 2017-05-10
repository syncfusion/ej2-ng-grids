import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { GridComponent } from './grid.component';
/**
 * NgModule definition for the Grid component.
 */
var GridModule = (function () {
    function GridModule() {
    }
    return GridModule;
}());
export { GridModule };
GridModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
/** @nocollapse */
GridModule.ctorParameters = function () { return []; };
//# sourceMappingURL=grid.module.js.map