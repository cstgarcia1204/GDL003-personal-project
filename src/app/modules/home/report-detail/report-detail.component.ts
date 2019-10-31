import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page"
import { ActivatedRoute } from "@angular/router";
import { MapboxViewApi } from "nativescript-mapbox";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "./report-detail.component.html"
})
export class ReportDetailComponent {
    public report:any;
    private map: MapboxViewApi;

    constructor(private page: Page, private params: ActivatedRoute, private navigate: RouterExtensions){
    
        this.page.actionBarHidden= true
        this.report= JSON.parse(
            this.params.snapshot.queryParams["report"]);


        console.log(JSON.parse(this.params.snapshot.queryParams["report"]))
    }

    public onMapReady(args,report):void{
       this.map= args.map;
       this.map.addMarkers([
           {
               lat:report.lat,
               lng:report.lng
           }
       ])
    }

    public onBack(){
        this.navigate.back();
    }
 }
