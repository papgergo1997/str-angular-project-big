import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-chart',
  templateUrl: './customer-chart.component.html',
  styleUrls: ['./customer-chart.component.scss']
})
export class CustomerChartComponent implements OnInit {

  @Input() customers: number[] = [5, 8, 2, 4];
  @Input() countries: any[] = ['England', 'USA', 'Australia', 'Scotland'];

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  barChartType: any = 'bar';
  barChartLegend = true;
  barChartData: any[] = [];


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.barChartData = [
        {
          data: this.customers, label: 'Customers', backgroundColor: '#10b7cb',
          hoverBackgroundColor: 'blue',
        }
      ];
    }, 150);

    console.log(this.customers, this.countries)
  }

}