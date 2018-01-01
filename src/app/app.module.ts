import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { ShellComponent } from './shell/shell.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ClipsListComponent } from './profile/clips-list/clips-list.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { XboxAPI } from './services/xboxAPI.service';
import { Application } from './common/application';
import { ActivityListComponent } from './profile/activity-list/activity-list.component';
import { ScreenshotListComponent } from './profile/screenshot-list/screenshot-list.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile/:gamertag', component: ProfileComponent },
  {
    path: ':gamertag',
    redirectTo: 'profile/:gamertag',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];


@NgModule({
  declarations: [
    ShellComponent,
    ToolbarComponent,
    ClipsListComponent,
    HomeComponent,
    ProfileComponent,
    ActivityListComponent,
    ScreenshotListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [XboxAPI, Application],
  bootstrap: [ShellComponent]
})
export class AppModule { }
