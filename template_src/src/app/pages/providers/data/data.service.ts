import { Injectable } from '@angular/core';
import { DataModule } from './data.module';
import { NgForage } from 'ngforage';

/**
 * Data Service for handling data in Native Storage (Cordova) or LocalStorage (Web-Browser)
 */
@Injectable({
    providedIn: DataModule,
})
export class DataService {

    /**
     * Data Service
     */
    public constructor(
      private ngForage: NgForage,
    ) { }


    public init(): void {
      console.log('##### init data-service');
      this.ngForage.setItem('blub', 'blubber');
    }
}
