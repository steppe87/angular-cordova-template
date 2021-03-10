

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForage } from 'ngforage';

/**
 * Startseite & Dashboard
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public output: string;

  public constructor(
    private router: Router,
    private ngForage: NgForage,
  ) {
    // TODO
  }

  /**
   * NG-Lifecycle HOOK - OnInit
   */
  public async ngOnInit(): Promise<void> {
    this.output = await this.ngForage.getItem('blub');
  }

}
