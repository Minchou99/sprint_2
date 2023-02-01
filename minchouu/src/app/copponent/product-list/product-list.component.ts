import {Component, OnInit} from '@angular/core';
import {Categoty} from '../../model/product/categoty';
import {Product} from '../../model/product/product';
import {Image} from '../../model/product/image';
import {ProductService} from '../../service/product.service';
import {PageProduct} from '../../dto/page-product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  category: Categoty[];
  product: Product[];
  image: Image;
  pageProduct: PageProduct | undefined;
  nameSearch = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getListProduct();
  }

  getListProduct() {
    this.productService.getListProduct(this.nameSearch, 0).subscribe(productList => {
      console.log(productList);
      this.pageProduct = productList;
    });
  }

  goToPage(i: number) {
    this.productService.getListProduct(this.nameSearch, i).subscribe(
      data => {
        this.pageProduct = data;
        console.log(data);
      });
  }


  search() {
    this.getListProduct();
  }
}
