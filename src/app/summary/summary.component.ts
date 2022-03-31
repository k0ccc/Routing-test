import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, userData } from '../services/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  data: userData[] = [];

  @Input()
  lengthData!: number;
  constructor(private dataService: DataService, private route: Router) {}

  ngOnInit(): void {
    // Обрабатываем данные
    this.dataService.getData().subscribe((data) => {
      // Добавляем польз. в массив
      data.data.forEach((a) => this.data.push(a));
      // Берем количество пользователей
      this.lengthData = data.total;
      // Сохроняем данные
      this.dataService.setArr(this.data)
    });
  }
  income() {
    this.route.navigate(['/navigator'], { queryParams: { tab: 0 } });
  }
  invest() {
    this.route.navigate(['/navigator'], { queryParams: { tab: 1 } });
  }
  outcome() {
    this.route.navigate(['/navigator'], { queryParams: { tab: 2 } });
  }
  loans(){
    this.route.navigate(['/navigator'], { queryParams: { tab: 3 } });
  }
}
