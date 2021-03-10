import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DataModule } from './pages/providers/data/data.module';
import { Driver, InstanceFactory, NgForage, NgForageConfig } from 'ngforage';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DataModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor(
    ngfConfig: NgForageConfig,
  ) {
    ngfConfig.configure({
      name: 'angular-cordova-template',
      driver: [
        Driver.INDEXED_DB,
        Driver.WEB_SQL,
        Driver.LOCAL_STORAGE,
      ],
    });
  }
}
