import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild  } from '@angular/core';// ルーティングによる画面遷移のために必要なモジュール
import { ApplicationComponent } from './application/application.component';
import { RouterModule,RouterOutlet, RouterLink  } from '@angular/router';
import { Router } from '@angular/router';


import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';



@Component({
    // このコンポーネントを表すタグ
    selector: 'app-root',
    imports: [
      RouterModule,//html内で <router-outlet>を使うために必要
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      RouterOutlet,
      RouterLink
    ],
    // このコンポーネントに対応するHTML（テンプレート）
    templateUrl: './app.component.html',
    // このコンポーネントが使用するCSS
    styleUrls: ['./app.component.scss'],
    standalone: true
})

export class AppComponent {
  title = 'MyHomeEnvironment';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}


