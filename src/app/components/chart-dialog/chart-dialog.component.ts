import { Component, OnInit, } from "@angular/core";
import { OutsideMagasineService } from "src/app/service/outside.magasine.service";
import { Product } from "src/app/service/type";

@Component({
    selector: 'app-chart-dialog',
    templateUrl: 'chart-dialog.component.html',
    styleUrls: ['chart-dialog.component.scss']
})

export class ChartDialogComponent implements OnInit {
    products: Product[] = [];
    constructor(private service: OutsideMagasineService) {
    }
    ngOnInit() {
        this.getChartProducts()
        console.log('init')
    }
    getChartProducts() {
        this.service.getChartProducts?.subscribe(res => {
            this.products = res;
            console.log(this.products)
        })
    }
}