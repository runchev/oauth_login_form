import { ProfileComponent } from './components/profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';

import {routing, appRoutingProviders} from './app.routing';
import { AUTH_PROVIDERS, AuthHttp } from 'angular2-jwt';
import { Auth } from './services/auth.service';
import { AuthGuard } from './auth.guard';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule }      from '@angular/core';

@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ AppComponent,HomeComponent,ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [appRoutingProviders,AUTH_PROVIDERS, Auth, AuthGuard]
})
export class AppModule { }
