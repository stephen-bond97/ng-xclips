import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screenshot-list',
  templateUrl: './screenshot-list.component.html',
  styleUrls: ['./screenshot-list.component.scss']
})
export class ScreenshotListComponent implements OnInit {

  @Input()
  public xuid: string;

  public constructor() { }

  public ngOnInit() {
  }
}
