import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.scss'],
    standalone: false
})
export class ApplicationComponent implements OnInit, AfterViewInit {

  constructor() { }

	active = 'top';
  ngOnInit(): void {
  }
  
  context01: CanvasRenderingContext2D;
  @ViewChild('canvas01') canvas01: ElementRef;

  ngAfterViewInit() {
    this.context01 = this.canvas01.nativeElement.getContext('2d');
    try{
      let canvas01 = new Chart(this.context01, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'Data01',
              backgroundColor: 'rgba(255, 255, 153, 0.5)',
              borderColor: 'rgba(255, 99, 132, 0)',
              pointRadius: 0,
              fill: true,
              data: [
                { x: 0, y: 2 },
                { x: 1, y: 1 },
                { x: 2, y: 2.5 },
                { x: 3, y: 5 },
                { x: 4, y: 3 },
                { x: 5, y: 4 },
                { x: 6, y: 9 },
                { x: 7, y: 7 },
                { x: 8, y: 12 },
              ],
            },
            {
              label: 'Data02',
              backgroundColor: 'rgba(153, 255, 255, 0.5)',
              borderColor: 'rgba(255, 99, 132, 0)',
              pointRadius: 0,
              fill: true,
              data: [
                { x: 0, y: 1 },
                { x: 1, y: 4 },
                { x: 2, y: 8 },
                { x: 3, y: 12 },
                { x: 4, y: 1 },
                { x: 5, y: 5 },
                { x: 6, y: 2 },
                { x: 7, y: 3 },
                { x: 8, y: 1 },
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Angular & Chart.js',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            },
          },
          scales: {
            x: {
              display: true,
              type: 'linear',
              position: 'bottom',
              title: {
                display: true,
                text: 'X',
              },
            },
            y: {
              type: 'linear',
              title: {
                display: true,
                text: 'Y',
              },
            },
          },
        },
      });
    }catch(e:unknown){
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  }

}
