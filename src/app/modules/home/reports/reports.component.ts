import { Component } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { TextField } from "tns-core-modules/ui/text-field";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "./reports.component.html"
})
export class ReportsComponent {
    public data:ObservableArray<any>;
    

    constructor( private navigate: RouterExtensions){
        this.data= new ObservableArray<any>([]);
        this.data.push([
            {
                name:"Cinthia Tagle",
                color:"rojo",
                photo:"https://i.imgur.com/wofEY9S.jpg",
                description:"Cuidado con este bache. Se encuentra en la colonia Olivos",
                location:"Tlaquepaque",
                lat:20.593257,
                lng:-103.392329
            },
            {
                name:"Cesar García",
                color:"azul",
                photo:"https://i.imgur.com/kEXx5cw.jpg",
                description:"Semaforo descompuesto en López Mateos Sur",
                location:"Zapopan",
                lat:20.628088,
                lng:-103.417797

            },
            {
                name:"Rafael Robles",
                color:"negro",
                photo:"https://i.imgur.com/89hhpGZ.jpg",
                description:"Fuga de agua en la calle Jose González Gallo",
                location:"Tlaquepaque",
                lat:20.580768,
                lng: -103.381251
            },
            {
                name:"Jesus Neri",
                color:"cafe",
                photo:"https://i.imgur.com/KFQI59b.jpg",
                description:"Inundación en la estación Atemajac del Tren",
                location:"Zapopan",
                lat:20.715756,
                lng:-103.354634
            },
            {
                name:"Angie Lozano",
                color:"amarillo",
                photo:"https://i.imgur.com/ZwZE2nJ.png",
                description:"Camino inundado, sin acceso, no carros, no camión",
                location:"Tonalá",
                lat:20.574068,
                lng:-103.229673
            },
            {
                name:"Isaac Sánchez",
                color:"verdeLimon",
                photo:"https://i.imgur.com/fRpjOfI.jpg",
                description:"Fuga de agua menor, en colonia Santa Isabel ",
                location:"Guadalajara",
                lat:20.713963,
                lng: -103.314404
            }
        
        
        ]);
        
    }

    public onReturnPress(args){
        let textField= <TextField>args.object;//castear el elemento para poder acceder a todas las propiedades que tiene textField y manejar la data
        console.log(textField.text);
        let result=[]
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].name == textField) {
                return result= this.data[i].name
            } return textField;
        
        }
    
    }

    public onNavigate(item){
        this.navigate.navigate(["/home/report-detail"], {
            queryParams: {
                report: JSON.stringify(item)
            }
        });
    }
 }
