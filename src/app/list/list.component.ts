import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, userData } from '../services/data.service';

enum tabs {
  Income = 0,
  Outcome = 1,
  Loans = 2,
  Investments = 3
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tab:number = 0
  users!:userData[]

  constructor(private activRoute: ActivatedRoute,
              private userService:DataService     
    ) {}

  ngOnInit(): void {
    this.activRoute.queryParams
    .subscribe(params => {
      this.tab = params['tab'];      
    })
    this.users = this.userService.getArr()
    console.log(this.users);
    
  }
}
