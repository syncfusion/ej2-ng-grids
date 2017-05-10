import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-ng-base';


let input: string[] = ['allowFiltering', 'allowGrouping', 'allowSorting', 'columns', 'customAttributes', 'disableHtmlEncode', 'displayAsCheckBox', 'field', 'filterBarTemplate', 'format', 'formatter', 'headerText', 'template', 'textAlign', 'type', 'uid', 'valueAccessor', 'visible', 'width'];

/**
 * `e-column` directive represent a column of the Angular Grid. 
 * It must be contained in a Grid component(`ej-grid`). 
 * ```html
 * <ej-grid [dataSource]='data' allowPaging='true' allowSorting='true'> 
 *   <e-columns>
 *    <e-column field='ID' width='100'></e-column>
 *    <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 * </ej-grid>
 * ```
 */
@Directive({
    selector: 'e-columns>e-column',
    inputs: input,
    queries: {

    }
})
export class ColumnDirective extends ComplexBase<ColumnDirective> {


    /** 
    * Defines the data type of column.
    * @default null
    */
    public type: string;
    /** 
    *  If `allowFiltering` set to false, then it disables filtering of a particular column.
    * @default true
    */
    public allowFiltering: boolean;
    /** 
    *  If `allowGrouping` set to false, then it disables grouping of a particular column.
    * @default true
    */
    public allowGrouping: boolean;
    /** 
    * If `allowSorting` set to false, then it disables sorting of a particular column.
    * @default true
    */
    public allowSorting: boolean;
    /** 
    * It is used to render multiple rows(stacked headers) on the Grid header.
    * @default null
    */
    public columns: any;
    /** 
    * User can customize css styles and attributes of the content cells of a particular column.
    * @default null
    */
    public customAttributes: any;
    /** 
    * If `disableHtmlEncode` set to true, then it encodes the html of header and content cells.
    * @default false
    */
    public disableHtmlEncode: boolean;
    /** 
    * To display column value as check box instead of boolean values.
    * @default true
    */
    public displayAsCheckBox: boolean;
    /** 
    * Defines the field name of column which is mapped with mapping name of DataSource.The bounded columns can be sort, filter and group etc.,
If the `field` name contains “dot”, then it is considered as complex binding.
    * @default undefined
    */
    public field: string;
    /** 
    * The `filterBarTemplate` is used to add a custom control instead of default input control for filter bar.It have create and read functions.
* create – It is used for creating custom controls.
* read – It is used to perform custom filter action.
    * @default null
    */
    public filterBarTemplate: any;
    /** 
    * The format that is applied to the value before it is displayed and it does not affect the original data source values.Gets the format from the user which can be standard or custom
[`number`](http://ej2.syncfusion.com/documentation/base/intl.html#number-formatter-and-parser)
and [`date`](http://ej2.syncfusion.com/documentation/base/intl.html#date-formatter-and-parser) formats.
    * @default null
    */
    public format: any;
    /** 
    * Defines the method which is used to achieve custom formatting from an external function.This function triggers before rendering of each cell.
    * @default null
    */
    public formatter: any;
    /** 
    * Defines the header text of column which is used to display in column header.If `headerText` is not defined, then field name value will be assigned to header text.
    * @default undefined
    */
    public headerText: string;
    /** 
    * Defines the column template as string or element selector which is used to add html element in each cells of the column.
    * @default null
    */
    public template: string;
    /** 
    * Defines to change alignment of column in both header and content cells.
    * @default left
    */
    public textAlign: any;
    /** 
    * Gets the unique identifier value of column. It is used to get column object.
    * @default undefined
    */
    public uid: string;
    /** 
    * Defines the method which is used to apply custom cell values from external function and display this on each cells of render.
    * @default null
    */
    public valueAccessor: any;
    /** 
    * If `visible` set to false, then hide the particular column.
    * @default true
    */
    public visible: boolean;
    /** 
    * Defines the width of column in pixels or percentage.
    * @default undefined
    */
    public width: any;
}

/**
 * Column Array Directive
 * @private
 */
@Directive({
    selector: 'ej-grid>e-columns',
    queries: {
        children: new ContentChildren(ColumnDirective)
    },
})
export class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor() {
        super('columns');
    }
}