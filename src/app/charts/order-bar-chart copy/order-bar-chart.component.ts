import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-proba-chart',
  templateUrl: './order-bar-chart.component.html',
  styleUrls: ['./order-bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  // [datasets]="barChartData"
  public barChartData: ChartDataSets[] = [
    {
      label: 'Series B',
      data: [64, 58, 80, 81, 56, 55, 41],
    }
  ];

  // [labels]="barChartLabels"
  public barChartLabels: Label[] = [
    'oId1', 'oId2', 'oId3', 'oId4', 'oId5', 'oId6', 'oId7'
  ];

  // [options]="barChartOptions"
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },  // We use these empty structures as placeholders for dynamic theming.
/*     title: {
      text: 'HELLOKA',
      fontSize: 113,
      fontColor: '#00FF00',
    }, */
    legend: {  // maga a színmagyarázónak a szövege
      align: 'end',
      labels: {
        fontSize: 12,  //szerintem ez pixelben
        fontColor: '#FF0000'  //piros
      }
    },
    hover: {  // a színes oszlopok fölé viszem a kurzort
      mode: "point",  //mik jelölődjenek ki; másik érdekes a "dataset" érték
      animationDuration: 300,  //ms-ben
    },
    animation: {  // amikor betöltődik az oldal, ezt játszódik le
      duration: 1000,  // idő ms-ben
      easing: "easeOutElastic",  // rugóznak az oszlopok
    },
/*     elements: {
      line: {
        backgroundColor: "#00ff00",
        borderWidth: 0,
        borderColor: "#000000",
      },
    }, */
  };

  // [legend]="barChartLegend"
  public barChartLegend = true;

  // [chartType]="barChartType"
  public barChartType: ChartType = 'bubble';



  constructor() { }

  ngOnInit(): void {
  }

}
