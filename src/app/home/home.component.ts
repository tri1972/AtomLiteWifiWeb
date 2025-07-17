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
  URL='http://localhost:7071/api/HttpTriggerEnvironment'
  message='日本晴れ';

  constructor(http:HttpClient) {
    this.http=http;
    /*
    http.get(this.URL)
      .subscribe((resp: any) => this.message = resp.text);
    */
  }
  

  getMethod(){
    //http.getをするためのオブジェクトを生成
    var httpObj = this.http.get(this.URL);
    this.message='ボタンが押された';
    //成功時・失敗時の動作を指定する。
    httpObj.subscribe((resp: any) => this.message = resp.text,this.getError);
  }

  //http.getが成功した時に走るメソッド
  getSuccess(response:Response){
    console.log(response.text());
  }

  //http.getが失敗した時に走るメソッド
  getError(error){
    console.log(error);
  }
}
