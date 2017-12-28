import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router/src/shared';
import { XboxAPI } from '../services/xboxAPI.service';
import { Application } from '../common/application';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private xuid: string;

  public showEmpty: boolean = false;

  public constructor(
    private route: ActivatedRoute,
    private xboxAPI: XboxAPI,
    private app: Application
  ) { }

  public ngOnInit() {
    this.route.paramMap.subscribe(paramMap => this.getGamertag(paramMap));
  }

  private getGamertag(paramMap: ParamMap): void {
    this.reset();

    let gamertag = paramMap.get('gamertag');
    this.xboxAPI.getXUID(gamertag).subscribe(
      response => this.handleXUIDSuccess(response.xuid),
      error => this.handleXUIDFailure(error)
    );
  }

  private handleXUIDSuccess(xuid: string) {
    this.xuid = xuid;
    this.app.loading = false;
  }

  private handleXUIDFailure(error) {
    this.showEmpty = true;
    this.app.loading = false;
  }

  private reset() {
    this.app.loading = true;

    this.showEmpty = false;
    this.xuid = "";
  }
}
