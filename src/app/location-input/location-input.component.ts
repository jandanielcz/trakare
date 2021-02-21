import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs'
import { Place } from '../place';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss']
})



export class LocationInputComponent implements OnInit {

  constructor(private weatherService: WeatherService) {}

  location = new FormControl('Prague')
  places: Place[] = [];

  getLocations(): void {
    this.weatherService.getLocations(this.location.value).subscribe(
      locations => {
        this.places = locations
      }
    )
  }

  selectPlace(event: MatAutocompleteSelectedEvent): void {
    let p = new Place();
    p.title = event.option.value;
    p.woeid = parseInt(event.option.id);
    this.updateParent(p);
  }

  locationTitle(location: Place): string {
    return location.title;
  }

  @Output() setLocation: EventEmitter<Place> = new EventEmitter<Place>();
  updateParent(location: Place){
    this.setLocation.emit(location)
  }

  ngOnInit(): void {
    this.getLocations();
    this.location.valueChanges.subscribe(()=>{this.getLocations()})
  }

}
