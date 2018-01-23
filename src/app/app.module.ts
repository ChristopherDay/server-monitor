import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HostListComponent } from './host-list/host-list.component';
import { NewHostComponent } from './new-host/new-host.component';


@NgModule({
  declarations: [
    AppComponent,
    HostListComponent,
    NewHostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
