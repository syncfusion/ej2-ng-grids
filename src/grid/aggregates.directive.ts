import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-ng-base';

import { AggregateColumnsDirective } from './aggregate-columns.directive';

let input: string[] = ['columns'];

/**
 * `e-aggregate` directive represent a aggregate row of the Angular Grid. 
 * It must be contained in a Grid component(`ej-grid`). 
 * ```html
 * <ej-grid [dataSource]='data' allowPaging='true' allowSorting='true'> 
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ej-grid>
 * ```
 */
@Directive({
    selector: 'e-aggregates>e-aggregate',
    inputs: input,
    queries: {
        childColumns: new ContentChild(AggregateColumnsDirective)
    }
})
export class AggregateDirective extends ComplexBase<AggregateDirective> {
    public childColumns: any;
    public tags: string[] = ['columns'];
    /** 
    * Configures the aggregate columns.      * @default []
    */
    public columns: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
    }
}

/**
 * Aggregate Array Directive
 * @private
 */
@Directive({
    selector: 'ej-grid>e-aggregates',
    queries: {
        children: new ContentChildren(AggregateDirective)
    },
})
export class AggregatesDirective extends ArrayBase<AggregatesDirective> {
    constructor() {
        super('aggregates');
    }
}