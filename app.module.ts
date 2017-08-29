import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './src/app/footer/footer.component';
import { HeaderComponent } from './src/app/header/header.component';
import { MapComponent } from './src/app/map/map.component';
import { ContentComponent } from './src/app/content/content.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MapComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot(
      {apiKey: 'AIzaSyACBE0zHMOsSJxQZ_IQRF1BWijPYdAHxp4'}
    ),
    AgmSnazzyInfoWindowModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
