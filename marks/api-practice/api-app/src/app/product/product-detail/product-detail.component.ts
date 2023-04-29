import { ProductService } from 'src/app/_services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(private productService: ProductService, private route: ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    var id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        this.product = product;
      }
    })
  }

}
