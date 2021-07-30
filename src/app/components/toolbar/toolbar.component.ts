import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Application } from 'src/app/common/application.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public gamertag: string = "";
  public showSearch = true;

  public constructor(
    private router: Router,
    private app: Application
  ) { }

 ngOnInit(): void {
    this.router.events.subscribe(x => this.handleRouterEvent(x as RouterEvent));
  }

  private handleRouterEvent(event: RouterEvent): void {
    if (event.url) {
      if (event.url !== "/home") {
        this.showSearch = true;
      } else {
        this.showSearch = false;
      }
    }
  }


  public keyUp(event: KeyboardEvent): void {
    if (event.code == 'Enter' && this.gamertag) {
      this.goToProfile();
    }
  }

  public handleClick(): void {
    this.goToProfile();
  }

  private goToProfile(): void {
    if (this.gamertag) {
      this.router.navigateByUrl(`/profile/${this.gamertag}`);
      this.app.showLoadingBar();
    }
  }

}