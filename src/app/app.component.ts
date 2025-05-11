import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';// ルーティングによる画面遷移のために必要なモジュール
import { RouterModule, Routes } from '@angular/router';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationComponent } from './application/application.component';

@Component({
    // このコンポーネントを表すタグ
    selector: 'app-root',
    imports: [NgbNavModule, NgbNavModule],
    // このコンポーネントに対応するHTML（テンプレート）
    templateUrl: './app.component.html',
    // このコンポーネントが使用するCSS
    styleUrls: ['./app.component.css'],
    standalone: true
})

export class AppComponent {
  active = 'top';
}


