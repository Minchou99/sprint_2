import {Component, OnInit} from '@angular/core';
import {Categoty} from '../../model/product/categoty';
import {Product} from '../../model/product/product';
import {Image} from '../../model/product/image';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  category: Categoty[];
  product: Product[];
  image: Image;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getListProduct();
  }

  getListProduct() {
    this.productService.getListProduct().subscribe(productList => {
      this.product = productList;
    });
  }



}
