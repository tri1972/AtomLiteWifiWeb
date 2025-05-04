import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';// ルーティングによる画面遷移のために必要なモジュール
import { RouterModule, Routes } from '@angular/router';


@Component({
    // このコンポーネントを表すタグ
    selector: 'app-root',
    // このコンポーネントに対応するHTML（テンプレート）
    templateUrl: './app.component.html',
    // このコンポーネントが使用するCSS
    styleUrls: ['./app.component.css'],
    standalone: false
})

export class AppComponent {
}


