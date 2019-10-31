import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { BottomBarComponent } from "./bottom-bar/bottom-bar.component";
import { ReportsComponent } from "./reports/reports.component";
import { CommonModule } from "@angular/common";
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { ReportDetailComponent } from "./report-detail/report-detail.component";

registerElement('CardView', () => CardView);
registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

const routes: Routes =[
    {
        path: "reports",
        component: ReportsComponent
    },
    {
        path: "report-detail",
        component: ReportDetailComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        NativeScriptUIListViewModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)],
    declarations: [BottomBarComponent, ReportsComponent, ReportDetailComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class HomeModule { }
