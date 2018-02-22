import { ElementRef, ViewContainerRef } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-ng-base';
import { Pager } from '@syncfusion/ej2-grids';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-pager` represents the Angular Pager Component.
 * ```html
 * <ejs-pager></ejs-pager>
 * ```
 */
export declare class PagerComponent extends Pager implements IComponentBase {
    private ngEle;
    private viewContainerRef;
    /**
     *  Defines the template as string or HTML element ID which renders customized elements in pager instead of default elements.
     * @default null
     */
    template: any;
    constructor(ngEle: ElementRef, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
