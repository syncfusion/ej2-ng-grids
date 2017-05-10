import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-ng-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-ng-grids';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService, 
                SortService, 
                FilterService, 
                GroupService]
})
export class AppModule { }