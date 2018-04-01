import { Component, OnInit, Input } from '@angular/core';
import { XboxAPI } from '../../services/xboxAPI.service';

@Component({
  selector: 'app-clips-list',
  templateUrl: './clips-list.component.html',
  styleUrls: ['./clips-list.component.scss']
})
export class ClipsListComponent implements OnInit {

  @Input()
  public xuid: string;

  public clips: XAPI.GameClip[] = [];
  public selectedClip: XAPI.GameClip = null;

  public constructor(private xboxAPI: XboxAPI) { }

  public ngOnInit() {
    this.getClips();
  }

  public selectClip(clip: XAPI.GameClip): void {
    this.selectedClip = clip;
  }

  public closePopup(): void {
    this.selectedClip = null;
  }

  private getClips(): void {
    let obvs = this.xboxAPI.getClips(this.xuid);
    obvs.subscribe(
      response => this.handleClipsSuccess(response)
    )
  }

  private handleClipsSuccess(clips: XAPI.GameClip[]): void {
    this.clips = clips;
  }
}
