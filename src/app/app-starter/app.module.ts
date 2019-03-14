//Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';




//Custom Services Imports


//Custom Components Imports
import { AppComponent } from './app.component';
import { LoginComponent } from '../common/login/login.component'


//Sick Leave


//Account Information



//Custom Handheld Menu Components Imports




//Custom Header Components Imports
import {HeaderDesktopComponent} from './app-header-desktop.component';
import {HeaderHandheldComponent} from './app-header-handheld.component';
import {PageHeaderComponent} from '../common/header-before-login/page-header.component';
//End Header Components 

//Custom Angular Material Import
import { MaterialModule } from '../material/app.module.material';
//End 
//Recipient Components

//Support Support

// Training


 //App Directives used for validation 

import { appRoutesExport } from './app.routing';
import {MatListModule} from '@angular/material/list'


@NgModule({
  declarations: [
    AppComponent, LoginComponent, HeaderDesktopComponent,  HeaderHandheldComponent,
    PageHeaderComponent, 
  ],
  imports: [
    BrowserModule, FormsModule, appRoutesExport, HttpClientModule, MaterialModule, MatListModule, DeviceDetectorModule.forRoot()
  ],
  providers: [HeaderHandheldComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
