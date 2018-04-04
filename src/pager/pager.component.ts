import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-ng-base';
import { Pager } from '@syncfusion/ej2-grids';
import { Template } from '@syncfusion/ej2-ng-base';


export const inputs: string[] = ['currentPage','customText','enableExternalMessage','enablePagerMessage','enablePersistence','enableQueryString','enableRtl','externalMessage','locale','pageCount','pageSize','pageSizes','template','totalRecordsCount'];
export const outputs: string[] = ['click','created','dropDownChanged'];
export const twoWays: string[] = [];

/**
 * `ejs-pager` represents the Angular Pager Component.
 * ```html
 * <ejs-pager></ejs-pager>
 * ```
 */
@Component({
    selector: 'ejs-pager',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
export class PagerComponent extends Pager implements IComponentBase {



    /** 
     *  Defines the template as string or HTML element ID which renders customized elements in pager instead of default elements.
     * @default null
     */
    @ContentChild('template')
    @Template()
    public template: any;

    constructor(private ngEle: ElementRef, private viewContainerRef:ViewContainerRef) {
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

applyMixins(PagerComponent, [ComponentBase]);


