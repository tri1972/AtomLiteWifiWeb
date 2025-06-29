import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.scss'],
    standalone: false
})
export class ApplicationComponent implements OnInit {

  constructor() { }

	active = 'top';
  ngOnInit(): void {
  }

}
