import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
public langs=["C","C++","Java","Python"];

  constructor() { }

  ngOnInit() {
  }


}
