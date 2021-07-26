import { Component, OnInit } from "@angular/core";
import { OutsideMagasineService } from "src/app/service/outside.magasine.service";
import { Product } from "src/app/service/type";

@Component({
    selector: 'app-product-page',
    templateUrl: 'product-page.component.html',
    styleUrls: ['product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
    productChartList: Product[] = [];
    chartCount: number = 0;
    products: Product[] = [];

    constructor(private productService: OutsideMagasineService) {
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts()

    }

    addProduct(product: Product) {
        let box = this.productChartList.indexOf(product);
        console.log(box)
        if (box >= 0) {
            this.chartCount--;
            this.productChartList.splice(box, 1)
            this.productService.addChartProducts = this.productChartList
            return;
        }
        this.chartCount++;
        this.productChartList.push(product)
        this.productService.addChartProducts = this.productChartList
    }
}