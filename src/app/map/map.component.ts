import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  map_lat: number = 32.65;
  map_lng: number = -96.915;

  lat: number = 32.656276;
  lng: number = -96.890866;

  lat2: number = 32.632603;
  lng2: number = -96.942226;

  zoom: number = 13;
}

