import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// ルーティングによる画面遷移のために必要なモジュール
import { RouterModule, Routes } from '@angular/router';

import {} from '@angular/common/http';
import { AppComponent } from "./app.component";
import { ApplicationComponent } from './application/application.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

// Routing を行う対象のコンポーネントを管理する
// path にセットした文字列にマッチしたURLが指定されると、対になっているコンポーネントが表示される
// 下記のように明示する以外にも
//    '' で [/] のルートパスを指定できる
//    '**' でワイルドカードを指定できる
const ROUTE_TABLE: Routes = [
  { path: '', component: AppComponent }, 
  { path: 'page-a', component: ApplicationComponent },
  { path: 'error', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(ROUTE_TABLE,{ useHash: true }),
    NgbModule,
    AppRoutingModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
