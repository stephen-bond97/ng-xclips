import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { XboxAPI } from 'src/app/api/xbox.api.service';
import { Application } from 'src/app/common/application.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

  public gamertag: string = "";
  public settings: ProfileSetting[] = [];

  public showEmpty: boolean = false;
  public showClips: boolean = true;
  public showActivity: boolean = false;

  public constructor(
    private route: ActivatedRoute,
    private app: Application,
    private router: Router,
    private xboxAPI: XboxAPI
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let gamertag = paramMap.get('gamertag');
      if (gamertag) {
        this.app.showLoadingBar();
        this.gamertag = gamertag;
        this.getProfileInformation();
      }
      else {
        this.router.navigateByUrl("/");
      }
    });

  }

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

  public getProfileSetting(settingId: string): string {
    let profileSetting = this.settings.find(setting => setting.id == settingId);
    if (!profileSetting) {
      throw "Can't find setting: " + settingId;
    }

    return profileSetting!.value;
  }

  private getProfileInformation() {
    this.xboxAPI.getProfile(this.gamertag).subscribe(response => this.handleGetProfileSuccess(response));
  }

  private handleGetProfileSuccess(response: ProfileSetting[]): void {
    this.settings = response;
  }

}