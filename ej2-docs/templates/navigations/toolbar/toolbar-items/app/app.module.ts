import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponent, ItemDirective, ItemsDirective } from '@syncfusion/ej2-ng-navigations';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [AppComponent,ToolbarComponent,ItemsDirective,ItemDirective ],
    bootstrap: [AppComponent]
})
export class AppModule { }