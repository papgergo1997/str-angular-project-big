import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-bar-chart',
  templateUrl: './order-bar-chart.component.html',
  styleUrls: ['./order-bar-chart.component.scss']
})
export class OrderBarChartComponent implements OnInit {

  @Input() amounts: number[] = [];
  @Input() ids: any[] = [];

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  }
  barChartType: any = 'bar';
  barChartLegend = true;
  barChartData: any[] = [];

  constructor() { }

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

}
