import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// ルーティングによる画面遷移のために必要なモジュール
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { ApplicationComponent } from './application/application.component';

// Routing を行う対象のコンポーネントを管理する
// path にセットした文字列にマッチしたURLが指定されると、対になっているコンポーネントが表示される
// 下記のように明示する以外にも
//    '' で [/] のルートパスを指定できる
//    '**' でワイルドカードを指定できる
const ROUTE_TABLE: Routes = [
  { path: 'page-a', component: ApplicationComponent }
]
@NgModule({
  declarations: [
    AppComponent, 
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE_TABLE)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
