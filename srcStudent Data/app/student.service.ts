import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDetails } from './student'; 
import{ Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http:HttpClient) { }
  private _url:string="/assets/Data/student.json";

GetStudentInfo():Observable<IDetails[]>
{
  return this.http.get<IDetails[]>(this._url);
}

}
