import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/common/application.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

  public gamertag: string = "";

  public showEmpty: boolean = false;
  public showClips: boolean = true;
  public showActivity: boolean = false;

  public constructor(
    private route: ActivatedRoute,
    private app: Application,
    private router: Router
  ) { }

  ngOnInit(): void {}

  public showTab(tabName: string): void {
    this.showClips = false;
    this.showActivity = false;

    switch (tabName) {
      case "clips":
        this.showClips = true;
        break;

      case "activity":
        this.showActivity = true;
        break;
    }
  }
}