import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookDetailService {

  constructor() { }

public GetBookDetails()
{
  return[
    {"Name":"C Programming","Author":"Ajay Mittal","Price":1000,"NoPages":500},
    {"Name":"Thinking in C++","Author":"Bjrane Stroustrup ","Price":3000,"NoPages":800},
    {"Name":"Java","Author":"Arnold ","Price":800,"NoPages":600}
  ];

}

}
