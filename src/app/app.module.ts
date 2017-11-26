import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ShellComponent } from './shell/shell.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    ShellComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
