import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [AppComponent, DialogComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }