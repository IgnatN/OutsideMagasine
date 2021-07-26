import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../service/type';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
    @Input() product!: Product;
    @Output() addToBagEvent = new EventEmitter<number>();

    ngOnInit() {
        console.log(this.product);
    }
    addToBag(id: number) {
        this.addToBagEvent.emit(id);
    }

}
