import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class Application {

  public loadingChanged = new EventEmitter<boolean>();

  public showLoadingBar(): void {
    this.loadingChanged.emit(true);
  }

  public hideLoadingBar(): void {
    this.loadingChanged.emit(false);
  }

}
