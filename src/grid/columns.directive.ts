import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-ng-base';
import { Template } from '@syncfusion/ej2-ng-base';


let input: string[] = ['allowFiltering', 'allowGrouping', 'allowSorting', 'columns', 'customAttributes', 'disableHtmlEncode', 'displayAsCheckBox', 'field', 'filterBarTemplate', 'format', 'formatter', 'headerText', 'isPrimaryKey', 'template', 'textAlign', 'type', 'uid', 'valueAccessor', 'visible', 'width'];

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
    public type: any;
    /** 
     * If `allowFiltering` set to false, then it disables filtering option and filter bar element of a particular column. 
     * By default all columns are filterable.
     * @default true
     */
    public allowFiltering: any;
    /** 
     * If `allowGrouping` set to false, then it disables grouping of a particular column. 
     * By default all columns are groupable.
     * @default true
     */
    public allowGrouping: any;
    /** 
     * If `allowSorting` set to false, then it disables sorting option of a particular column. 
     * By default all columns are sortable.
     * @default true
     */
    public allowSorting: any;
    /** 
     * It is used to render multiple header rows(stacked headers) on the Grid header.
     * @default null
     */
    public columns: any;
    /** 
     * User can customize css styles and attributes of the content cells of a particular column.
     * 
     * ```html
     *<div id="Grid"></div>
     *```
     *```typescript
     *let gridObj: Grid = new Grid({
     *dataSource: filterData,
     *columns: [
     *   { field: 'OrderID', headerText: 'Order ID' },
     *   {
     *       field: 'EmployeeID', headerText: 'Employee ID', customAttributes: {
     *          class: 'employeeid',
     *          type: 'employee-id-cell'
     *     }
     *  }]
     *});
     *gridObj.appendTo('#Grid');
     *```
     *     
     * @default null
     */
    public customAttributes: any;
    /** 
     * If `disableHtmlEncode` set to true, then it encodes the html of header and content cells.
     * @default false
     */
    public disableHtmlEncode: any;
    /** 
     * If `displayAsCheckBox` set as true, then it displays column value as check box instead of boolean values.
     * @default true
     */
    public displayAsCheckBox: any;
    /** 
     * Defines the field name of column which is mapped with mapping name of DataSource. 
     * The bounded columns can be sort, filter and group etc., 
     * If the `field` name contains “dot”, then it is considered as complex binding. 
     * The `field` name must be a valid JavaScript identifier, 
     * the first character must be an alphabet and should not contain spaces and special characters.
     * @default undefined
     */
    public field: any;
    /** 
     * The `filterBarTemplate` is used to add a custom component instead of default input component for filter bar. 
     * It have create and read functions. 
     * * create – It is used for creating custom components. 
     * * read – It is used to perform custom filter action.
     * 
     * ```html
     *<div id="Grid"></div>
     *```
     *```typescript
     *let gridObj: Grid = new Grid({
     *dataSource: filterData,
     *columns: [
     *  { field: 'OrderID', headerText: 'Order ID' },
     *  {
     *     field: 'EmployeeID', filterBarTemplate: {
     *        create: (args: { element: Element, column: Column }) => {
     *             let input: HTMLInputElement = document.createElement('input');
     *             input.id = 'EmployeeID';
     *             input.type = 'text';
     *             return input;
     *        },
     *        write: (args: { element: Element, column: Column }) => {
     *            args.element.addEventListener('input', args.column.filterBarTemplate.read as EventListener);
     *        },
     *        read: (args: { element: HTMLInputElement, columnIndex: number, column: Column }) => {
     *            gridObj.filterByColumn(args.element.id, 'equal', args.element.value);
     *       }
     *    }
     * }],
     *  allowFiltering: true
     *});
     *gridObj.appendTo('#Grid');
     *```
     *     
     * @default null
     */
    public filterBarTemplate: any;
    /** 
     * It is used to change display value with the given format and does not affect the original data. 
     * Gets the format from the user which can be standard or custom 
     * [`number`](http://ej2.syncfusion.com/documentation/base/intl.html#number-formatter-and-parser) 
     * and [`date`](http://ej2.syncfusion.com/documentation/base/intl.html#date-formatter-and-parser) formats.
     * @default null
     */
    public format: any;
    /** 
     * Defines the method which is used to achieve custom formatting from an external function. 
     * This function triggers before rendering of each cell.
     * 
     * ```html
     *<div id="Grid"></div>
     *```
     *```typescript
     *class ExtendedFormatter implements ICellFormatter {
     *public getValue(column: Column, data: Object): Object {
     *  return '<span style="color:' + (data['Verified'] ? 'green' : 'red') + '"><i>' + data['Verified'] + '</i><span>';
     *}
     *}
     *let gridObj: Grid = new Grid({
     *    dataSource: filterData,
     *    columns: [
     *        { field: 'ShipName', headerText: 'Ship Name' },
     *        { field: 'Verified', headerText: 'Verified Status', formatter: ExtendedFormatter }]
     *});
     *gridObj.appendTo('#Grid');
     *```
     *     
     * @default null
     */
    public formatter: any;
    /** 
     * Defines the header text of column which is used to display in column header. 
     * If `headerText` is not defined, then field name value will be assigned to header text.
     * @default undefined
     */
    public headerText: any;
    /** 
     * If `isPrimaryKey` set to true, then consider this column as primary key constraint.
     * @default false
     */
    public isPrimaryKey: any;
    /** 
     * Define the alignment of column in both header and content cells.
     * @default left
     */
    public textAlign: any;
    /** 
     * Gets the unique identifier value of column. It is used to get column object.
     * @default undefined
     */
    public uid: any;
    /** 
     * Defines the method which is used to apply custom cell values from external function and display this on each cells of render.
     * 
     * ```html
     *<div id="Grid"></div>
     *```
     *```typescript
     *let gridObj: Grid = new Grid({
     *dataSource: [{ EmployeeID: 1, EmployeeName: ['John', 'M'] }, { EmployeeID: 2, EmployeeName: ['Peter', 'A'] }],
     *columns: [
     *    { field: 'EmployeeID', headerText: 'Employee ID' },
     *    { field: 'EmployeeName', headerText: 'Employee First Name',
     *      valueAccessor: (field: string, data: Object, column: Column) => {
     *            return data['EmployeeName'][0];
     *        },
     *    }]
     *});
     *```
     *     
     * @default null
     */
    public valueAccessor: any;
    /** 
     * If `visible` set to false, then hide the particular column. By default all columns are displayed.
     * @default true
     */
    public visible: any;
    /** 
     * Defines the width of column in pixels or percentage.
     * @default undefined
     */
    public width: any;
    @ContentChild('template')
    @Template()
    public template: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
    }
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