import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PartnerComponent } from './partner/partner.component';
import { VideoComponent } from './video/video.component';
import { TicketsComponent } from './tickets/tickets.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

import { InstagramComponent } from './instagram/instagram.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PartnerComponent,
    VideoComponent,
    TicketsComponent,
    EntertainmentComponent,

    InstagramComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
