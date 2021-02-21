import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from '../forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  constructor() { }

  @Input() forecast?: Forecast;

  ngOnInit(): void {
  }

}
