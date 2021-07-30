import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from 'src/app/common/application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

  public gamertag: string = "";

  constructor(
    private router: Router,
    private app: Application
  ) { }

  public keyUp(event: KeyboardEvent): void {
    if (event.code == 'Enter' && this.gamertag) {
      this.goToProfile();
    }
  }

  public goToProfile(): void {
    if (this.gamertag) {
      this.router.navigateByUrl(`/profile/${this.gamertag}`);
      this.app.showLoadingBar();
    }
  }

}
