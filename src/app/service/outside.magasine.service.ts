import { Injectable } from "@angular/core";
import { Product } from "./type";

@Injectable({
    providedIn: 'root'
})
export class OutsideMagasineService {
    products: Product[] = [{
        id: 1,
        produs: 'Camasa',
        pret: 345,
        img: 'https://i.pinimg.com/236x/f3/4d/65/f34d65e69feb4a5f928da0b1f57585a7.jpg'
    },
    {
        id: 2,
        produs: 'Tricou',
        pret: 568,
        img: 'https://i.pinimg.com/474x/5f/57/0a/5f570adfc1de0c5113908cb90978426f.jpg'
    },
    {
        id: 3,
        produs: 'Blugi',
        pret: 464,
        img: 'https://i.ebayimg.com/images/g/QDcAAOSwrXhfynwO/s-l300.jpg'
    }
    ];

    getProducts(): Product[] {
        return this.products;
    }

}
