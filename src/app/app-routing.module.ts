import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { IconsComponent } from './views/icons/icons.component';
import { PageNotFoundComponent } from './views/404/not-found.component';

const routes: Routes = [
    { path: '',                 component: HomeComponent },
    { path: 'about',            component: AboutComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'icons',            component: IconsComponent },
    { path: '**',               component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
