import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})


export class HomeComponent {
  message='日本晴れ';

  constructor(http:HttpClient) {
    http.get('/api/HttpTriggerEnvironment')
      .subscribe((resp: any) => this.message = resp.text);
    /*  
    http.get('/api/message')
      .subscribe((resp: any) => this.message = resp.text);
      */
  }
}
