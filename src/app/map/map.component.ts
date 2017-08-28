import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  map_lat: number = 32.645882;
  map_lng: number = -96.913935;

  //32.645882, -96.913935

  lat: number = 32.656276;
  lng: number = -96.890866;

  lat2: number = 32.632603;
  lng2: number = -96.942226;

  zoom: number = 13;
}

