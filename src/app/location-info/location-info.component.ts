import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../place';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss']
})
export class LocationInfoComponent {

  @Input() place?: Place;

}
