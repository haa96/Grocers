import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}

