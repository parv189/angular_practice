import { ProductService } from 'src/app/_services/product.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm = new FormGroup( {
    title: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    image: new FormControl(''),
    category: new FormControl('')
  })

  constructor( private proudctService: ProductService) {

  }

  onSubmit() {
    console.log(this.productForm.value);
    this.proudctService.addProduct(this.productForm.value).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }
}
