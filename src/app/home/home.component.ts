import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})


export class HomeComponent {
  
  private http:HttpClient;
  URL='/api/HttpTriggerEnvironment';
  //URL='http://localhost:7071/api/HttpTriggerEnvironment'
  time=''
  temperature='';
  humidity='';
  pressure='';
  rainDrop='';

  constructor(http:HttpClient) {
    this.http=http;
    this.getHttp();
  }
  

  getMethod(){
    this.getHttp();
  }

  getHttp(){
    //http.getをするためのオブジェクトを生成
    var httpObj = this.http.get(this.URL);
    //成功時・失敗時の動作を指定する。
    httpObj.subscribe
    (
      (resp: any) => {
        this.time = resp.EnqueuedTimeUtc;
        this.temperature = resp.Body.Temperature;
        this.humidity = resp.Body.humidity;
        this.pressure = resp.Body.Pressure;
        this.rainDrop = resp.Body.Rain;
      },
      (error) => {//http.getが失敗した時に走るメソッド
        console.error('Error occurred:', error);
      },
      () => {//http.getが成功した時に走るメソッド
        console.log('HTTP request completed');
      }
    );

  }
}
