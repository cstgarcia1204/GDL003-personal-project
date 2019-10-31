import { Component, Input } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    moduleId: module.id,
    selector: "BottomBar",
    templateUrl: "./bottom-bar.component.html"
})
export class BottomBarComponent {
    constructor(private page: Page){
        this.page.actionBarHidden= true
    }

    @Input("index") public index:number;//para que reconozca el *ngIf "index" de nuestra vista bottom-bar
 }
