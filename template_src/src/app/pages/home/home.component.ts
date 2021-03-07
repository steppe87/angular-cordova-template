

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Startseite & Dashboard
 */
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    public constructor(
        private router: Router,
    ) {
        // TODO
    }

    /**
     * NG-Lifecycle HOOK - OnInit
     */
    public ngOnInit(): void {
        // TODO:
    }

}
