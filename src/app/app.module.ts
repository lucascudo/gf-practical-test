import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';
import { MenuModule } from 'primeng/menu';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
