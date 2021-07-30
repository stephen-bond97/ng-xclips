import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Application } from '../common/application.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  public loading = false;
  
  public constructor(
    private app: Application,
  ) {
    this.app.loadingChanged.subscribe(x => this.handleLoadingChanged(x));
  }

  private handleLoadingChanged(show: boolean): void {
    this.loading = show;
  }

}