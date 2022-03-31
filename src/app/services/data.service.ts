import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface userServer {
  total:number,
  data:[
  {
    type: 'income'|'outcome'|'loan'|'investment';
    _id: string;
    amount: number;
    name: {
      first: string;
      last: string;
    },
    company: string;
    email: string;
    phone: string;
    address: string;
  }]
}
export interface userData      
{
  type: 'income'|'outcome'|'loan'|'investment';
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  },
  company: string;
  email: string;
  phone: string;
  address: string;
}


@Injectable({ providedIn: 'root' })
export class DataService {

  users: userData[] = [];

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<userServer>('assets/json/jsonviewer.json');
  }
  setArr(users: userData[]): void {
    this.users = users;
  }
  getArr():userData[]{
    return this.users
  }
}