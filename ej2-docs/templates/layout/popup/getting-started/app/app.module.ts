import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PopupComponent } from '@syncfusion/ej2-ng-popups';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [AppComponent, PopupComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }