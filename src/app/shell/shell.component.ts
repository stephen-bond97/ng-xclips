import { Component } from '@angular/core';
import { Application } from '../common/application.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  public get loading(){
    return this.app.loading;
  }

  public constructor(
    private app: Application
  ) { }

}