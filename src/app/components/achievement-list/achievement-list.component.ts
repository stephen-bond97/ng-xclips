import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { XboxAPI } from 'src/app/api/xbox.api.service';
import { Application } from 'src/app/common/application.service';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss']
})
export class AchievementListComponent implements OnInit {

  public gamertag: string = "";
  public achievements: AchievementInfo[] = [];

  public constructor(
    private xboxAPI: XboxAPI, 
    private route: ActivatedRoute,
    private router: Router,
    private app: Application 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let gamertag = paramMap.get('gamertag');
      if (gamertag) {
        this.app.showLoadingBar();
        this.gamertag = gamertag;
        this.getActivity();
      }
      else {
        this.router.navigateByUrl("/");
      }
    });
  }

  private getActivity(): void {
    this.xboxAPI.getActivity(this.gamertag).subscribe(response => this.handleActivitySuccess(response));
  }

  private handleActivitySuccess(response: AchievementInfo[]): void {
    this.achievements = response;
    this.app.hideLoadingBar();
  }

}
