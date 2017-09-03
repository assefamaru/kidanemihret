import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
//
// import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/404/not-found.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { IconsComponent } from './views/icons/icons.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        ContactComponent,
        IconsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
