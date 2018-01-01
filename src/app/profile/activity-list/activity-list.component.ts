import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  @Input()
  public xuid: string;
  
  public constructor() { }

  public ngOnInit() {
  }
}
