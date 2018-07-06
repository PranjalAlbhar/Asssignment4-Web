import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-subcomponent1',
  templateUrl: './subcomponent1.component.html',
  styleUrls: ['./subcomponent1.component.css']
})
export class Subcomponent1Component implements OnInit {
 public info=[];

  constructor(private _Info:StudentService) { }

  ngOnInit() {
    this._Info.GetStudentInfo().subscribe(data=>this.info=data)
  }

}
