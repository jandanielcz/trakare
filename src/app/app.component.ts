import { Component } from '@angular/core';
import { Forecast } from './forecast';
import { Place } from './place';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private weatherService: WeatherService) {}

  title = 'trakare';
  selectedLocation?: Place;
  loadedForecast?: Forecast;
  isWeatherLoading: boolean = false;

  setLocation(place: Place){
    this.selectedLocation = place;
    this.loadWeather()
  }

  loadWeather(){
    if (!this.selectedLocation) {
      return;
    }
    this.isWeatherLoading = true;
    this.weatherService.getWeather(this.selectedLocation.woeid).subscribe(
      data => {
        console.log(data)
        this.isWeatherLoading = false;
        this.loadedForecast = data
      }
    )
  }
}
