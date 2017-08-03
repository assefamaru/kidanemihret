import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutesModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RoutesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
