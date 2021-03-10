import { Component, OnInit } from '@angular/core';
import { DataService } from './pages/providers/data/data.service';

declare const NativeStorage: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-cordova-template';

  public constructor(
    private dataService: DataService,
  ) {
    document.addEventListener(
      'deviceready',
      this.deviceReady.bind(this),
      false,
    );
  }

  /**
   * ngOnInit lifecycle hook
   */
  // tslint:disable-next-line: cognitive-complexity
  public async ngOnInit(): Promise<void> {
    await this.dataService.init();
  }

  /**
   * Event handler for the device ready event (app initial load)
   */
  private async deviceReady(): Promise<void> {
    console.log('##### deviceReady');
    await this.dataService.init();
  }
}
