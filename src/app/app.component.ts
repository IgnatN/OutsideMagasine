import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { OutsideMagasineService } from './service/outside.magasine.service';
import { Product } from './service/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  user = {
    name: 'Colea',
  }
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
