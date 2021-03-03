import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-bar-chart',
  templateUrl: './bill-bar-chart.component.html',
  styleUrls: ['./bill-bar-chart.component.scss']
})
export class BillBarChartComponent implements OnInit {

  @Input() amounts: number[] = [];
  @Input() ids: any[] = [];

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  barChartType: any = 'bar';
  barChartLegend = true;
  barChartData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.barChartData = [
      { data: this.amounts, label: 'Bill value', backgroundColor: 'green' }
    ];
  }

}
