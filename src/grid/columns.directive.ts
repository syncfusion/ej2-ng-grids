import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-ng-base';
import { Template } from '@syncfusion/ej2-ng-base';


let input: string[] = ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowResizing', 'allowSorting', 'clipMode', 'columns', 'customAttributes', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editType', 'field', 'filterBarTemplate', 'format', 'formatter', 'headerText', 'hideAtMedia', 'isIdentity', 'isPrimaryKey', 'maxWidth', 'minWidth', 'showInColumnChooser', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];

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
     * If `allowEditing` set to false, then it disables editing of a particular column. 
     * By default all columns are editable.
     * @default true
     */
    public allowEditing: any;
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
     * If `allowResizing` set to false, then it disables resize option of a particular column.
     * @default true
     */
    public allowResizing: any;
    /** 
     * If `allowSorting` set to false, then it disables sorting option of a particular column. 
     * By default all columns are sortable.
     * @default true
     */
    public allowSorting: any;
    /** 
     * Defines the cell content's overflow mode. The available modes are 
     * * `clip` -  Truncates the cell content when it overflows its area. 
     * * `ellipsis` -  Displays ellipsis when the cell content overflows its area. 
     * * `ellipsiswithtooltip` - Displays ellipsis when the cell content overflows its area 
     * also it will display tooltip while hover on ellipsis applied cell.
     * @default ellipsis
     */
    public clipMode: any;
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
     * Defines the default values for component while adding a new record to the Grid.
     * @default null
     */
    public defaultValue: any;
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
     * Defines the `IEditCell` object to customize default edit cell.
     * @default {}
     */
    public edit: any;
    /** 
     * Defines the type of component for editable.
     * @default stringedit
     */
    public editType: any;
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
     * column visibility can change based on its [`Media Queries`](http://cssmediaqueries.com/what-are-css-media-queries.html). 
     * `hideAtMedia` accepts only valid Media Queries.
     * @default undefined
     */
    public hideAtMedia: any;
    /** 
     * If `isIdentity` is set to true, then this column is considered as identity column.
     * @default false
     */
    public isIdentity: any;
    /** 
     * If `isPrimaryKey` set to true, then consider this column as primary key constraint.
     * @default false
     */
    public isPrimaryKey: any;
    /** 
     * Defines the maximum width of column in pixels or percentage.
     * @default undefined
     */
    public maxWidth: any;
    /** 
     * Defines the minimum width of column in pixels or percentage.
     * @default undefined
     */
    public minWidth: any;
    /** 
     * If `showInColumnChooser` set to false, then hides the particular column in column chooser. 
     * By default all columns are displayed in column Chooser.
     * @default true
     */
    public showInColumnChooser: any;
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
     * Defines rules to validate data before create and update.
     * @default null
     */
    public validationRules: any;
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
    /** 
     * Defines the column template as string or HTML element ID which is used to add customized element in each cells of the column.
     * @default null
     */
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