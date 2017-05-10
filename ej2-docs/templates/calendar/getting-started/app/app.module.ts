import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from '@syncfusion/ej2-ng-calendars';
import { AppComponent } from './app.component';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent, CalendarComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }