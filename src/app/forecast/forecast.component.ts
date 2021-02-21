import { Component, Input } from '@angular/core';
import { Forecast } from '../forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {

  constructor() { }

  @Input() forecast?: Forecast;

  

}
