import { Component, OnInit } from '@angular/core';
import { BookDetailService } from '../book-detail.service';

@Component({
  selector: 'app-subcomponent1',
  templateUrl: './subcomponent1.component.html',
  styleUrls: ['./subcomponent1.component.css']
})
export class Subcomponent1Component implements OnInit {

  public books=[];
  constructor(private _bookService:BookDetailService) { }

  ngOnInit() {
    this.books=this._bookService.GetBookDetails();
  }

}
