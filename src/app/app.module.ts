import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AlbumComponent } from './pages/album/album.component';
import { AlbumpageComponent } from './pages/albumpage/albumpage.component';
import { ModalComponent } from './pages/modal/modal.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    HomepageComponent,
    AlbumComponent,
    AlbumpageComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  //exports: [AlertButtonComponent],
})
export class AppModule { }
