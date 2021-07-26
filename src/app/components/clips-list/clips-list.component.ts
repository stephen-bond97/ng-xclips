import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { XboxAPI } from 'src/app/api/xbox.api.service';
import { Application } from 'src/app/common/application.service';

@Component({
  selector: 'app-clips-list',
  templateUrl: './clips-list.component.html',
  styleUrls: ['./clips-list.component.scss']
})
export class ClipsListComponent implements OnInit {

  public gamertag: string = "";

  public clips: GameClip[] = [];

  public constructor(
    private xboxAPI: XboxAPI, 
    private route: ActivatedRoute, 
    private router: Router, 
    private app: Application
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let gamertag = paramMap.get('gamertag');
      if (gamertag) {
        this.app.loading = true;
        this.gamertag = gamertag;
        this.getClips();
      }
      else {
        this.router.navigateByUrl("/");
      }
    });
  }

  public selectClip(clip: GameClip): void {
    window.location.href = clip.gameClipUris[0].uri;
  }

  private getClips(): void {
    this.xboxAPI.getClips(this.gamertag).subscribe(response => this.handleClipsSuccess(response));
  }

  private handleClipsSuccess(response: XboxClipsResponse): void {
    this.clips = response.gameClips;
    this.app.loading = false;
  }

}
