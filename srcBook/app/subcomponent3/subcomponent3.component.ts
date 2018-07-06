import { Component, OnInit } from '@angular/core';
import { BookDetailService } from '../book-detail.service';

@Component({
  selector: 'app-subcomponent3',
  templateUrl: './subcomponent3.component.html',
  styleUrls: ['./subcomponent3.component.css']
})
export class Subcomponent3Component implements OnInit {
public books=[];

  constructor(private _BookDetails:BookDetailService) { }

  ngOnInit() {
    this.books=this._BookDetails.GetBookDetails();
  }

}
