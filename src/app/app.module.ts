import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TwitchComponent } from './twitch/twitch.component';
import { DiscordComponent } from './discord/discord.component';
import { GimosComponent } from './gimos/gimos.component';
import { ModComponent } from './mod/mod.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    TwitchComponent,
    DiscordComponent,
    GimosComponent,
    ModComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
