import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NumericTextBoxComponent } from '@syncfusion/ej2-ng-inputs';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent, NumericTextBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }