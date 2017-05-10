import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartComponent, SeriesDirective, SeriessDirective } from '@syncfusion/ej2-ng-charts';
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-ng-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [AppComponent, ChartComponent, SeriesDirective, SeriessDirective],
    bootstrap: [AppComponent],
    providers: [ CategoryService, LineSeriesService]
})
export class AppModule { }