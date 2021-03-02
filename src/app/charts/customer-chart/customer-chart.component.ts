import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-chart',
  templateUrl: './customer-chart.component.html',
  styleUrls: ['./customer-chart.component.scss']
})
export class CustomerChartComponent implements OnInit {

  @Input() customers: any[] = [];
  @Input() countries: any[] = [];

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
      { data: this.customers, label: 'Customers Countries', backgroundColor: 'green' }
    ];
  }

}
