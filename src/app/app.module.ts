import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ClipsListComponent } from './clips-list/clips-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clips', component: ClipsListComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
  //{ path: 'hero/:id', component: HeroDetailComponent },
  /* {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent } */
];


@NgModule({
  declarations: [
    ShellComponent,
    ToolbarComponent,
    ClipsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
