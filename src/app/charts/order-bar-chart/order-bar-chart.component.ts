import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-bar-chart',
  templateUrl: './order-bar-chart.component.html',
  styleUrls: ['./order-bar-chart.component.scss']
})
export class OrderBarChartComponent implements OnInit {
  @Input() amounts: number[] = [];

  // [datasets]="barChartData"
  barChartData: any[] = [];
  ngOnInit(): void {
    this.barChartData = [
      {
        label: 'Order value',
        data: this.amounts,
        backgroundColor: '#ffa726',
        hoverBackgroundColor: '#fb8c00',
      }
    ];
  }

  // [labels]="ids"
  @Input() ids: any[] = [];

  // [options]="barChartOptions"
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  // [legend]="barChartLegend"
  barChartLegend = true;

  // [chartType]="barChartType"
  barChartType: any = 'bar';


  constructor() { }


}
