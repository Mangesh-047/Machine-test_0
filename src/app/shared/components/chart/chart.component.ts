import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    // labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct'],

    datasets: [
      { data: [600, 630, 150, 430, 120, 520, 550, 800, 80, 390], label: 'Series A', backgroundColor: '#AAA3FF' },
      { data: [960, 100, 70, 350, 520, 120, 270, 780, 2, 290], label: 'Series B', backgroundColor: '#000' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor() { }


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct'],


  //------ Pie -----//
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    // backgroundColor: '#000',

  };
  public pieChartLabels = ['Sales', 'Store', 'goal', 'sme',];
  public pieChartDatasets = [{
    data: [35, 30, 15, 25],
    backgroundColor: ["#A3EEFF", "#9A9A9A", "#646464", "#AAA3FF"]
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
