import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { ContentComponent } from './content/content.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { Meta } from '@angular/platform-browser';

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACBE0zHMOsSJxQZ_IQRF1BWijPYdAHxp4'
    }),
    AgmSnazzyInfoWindowModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private metaService: Meta) {
    this.metaService.addTag({ property: 'description', content: 'Cadet Cleaners is a family owned dry cleaners that has been serving the Dallas and Duncanville areas for over 30 years. We pride ourselves on our attention to detail, as well as giving our customers the best possible customer service.' });
  }
}
