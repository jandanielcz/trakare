import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs'
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss']
})



export class LocationInputComponent implements OnInit {

  constructor(private weatherService: WeatherService) {}

  location = new FormControl('Prague')
  options: { title: string; woeid: number}[] = [];

  getLocations(): void {
    this.weatherService.getLocations(this.location.value).subscribe(
      
      locations => {
        this.options = locations.map(
          ( one: { title: string; woeid: number}) => {
            return {title : one.title, woeid: one.woeid}
          }
        )
      }
    )
  }

  loadWeather(event: MatAutocompleteSelectedEvent): void {
    console.log(event)
    this.weatherService.getWeather(event.option.id).subscribe(
      stuff => {
        console.log(stuff)
      }
    )
  }

  locationTitle(location: { title: string; woeid: number}): string {
    return location.title;
  }

  ngOnInit(): void {
    this.getLocations();
    this.location.valueChanges.subscribe(()=>{this.getLocations()})
  }

}
