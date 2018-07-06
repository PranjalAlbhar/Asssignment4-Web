import { Component, OnInit } from '@angular/core';
import { BookDetailService } from '../book-detail.service';

@Component({
  selector: 'app-subcomponent2',
  templateUrl: './subcomponent2.component.html',
  styleUrls: ['./subcomponent2.component.css']
})
export class Subcomponent2Component implements OnInit {

  public books=[];
  constructor(private _BookDetails:BookDetailService) { }

  ngOnInit() {
    this.books=this._BookDetails.GetBookDetails();
  }

}
