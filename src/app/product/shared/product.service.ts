import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<any> {
        // return products;
        return this.http.get('api/v1/products')
    }

    getProductById(productId: string) {
        // return products[productId];
        return this.http.get('api/v1/products/' + productId)
    }
}