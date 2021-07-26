import { Component, OnInit } from "@angular/core";
import { OutsideMagasineService } from "src/app/service/outside.magasine.service";
import { Product } from "src/app/service/type";

@Component({
    selector: 'app-product-page',
    templateUrl: 'product-page.component.html',
    styleUrls: ['product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
    productChartList: number[] = [];
    chartCount: number = 0;
    products: Product[] = [];

    constructor(private productService: OutsideMagasineService) {
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts()

    }

    addProduct(id: number) {
        let box = this.productChartList.indexOf(id);
        console.log(box)
        if (box >= 0) {
            this.chartCount--;
            this.productChartList.splice(box, 1)
            return;
        }
        this.chartCount++;
        this.productChartList.push(id)
    }
}