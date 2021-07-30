import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShellComponent } from './shell/shell.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Application } from './common/application.service';
import { ProfilePage } from './pages/profile/profile.page';
import { ClipsListComponent } from './components/clips-list/clips-list.component';
import { XboxAPI } from './api/xbox.api.service';
import { HttpClientModule } from '@angular/common/http';
import { AchievementListComponent } from './components/achievement-list/achievement-list.component';
import { HomePage } from './pages/home/home.page';

const appRoutes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'profile/:gamertag', component: ProfilePage },
  // {
  //   path: ':gamertag',
  //   redirectTo: 'profile/:gamertag',
  //   pathMatch: 'full',
  // },
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
    ProfilePage,
    ClipsListComponent,
    AchievementListComponent,
    HomePage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [Application, XboxAPI],
  bootstrap: [ShellComponent]
})
export class AppModule { }
