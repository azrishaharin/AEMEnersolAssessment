import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataDashboardService} from '../services/data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart: any;
  dataTable: string[];

  constructor(
    private dataDashboardService: DataDashboardService
  ) { }

  ngOnInit() {
    this.dataDashboardService.getAllData()
      .subscribe(res => {
        // console.log(res);

        let donut_name = res['chartDonut'].map(res=>res.name);
        let donut_value = res['chartDonut'].map(res=>res.value);

        let bar_name = res['chartBar'].map(res=> res.name);
        let bar_value = res['chartBar'].map(res=> res.value);



        this.chart = new Chart('donut', {
          type: 'pie',
          data: {
            labels: donut_name,
            datasets: [
              {
                data: donut_value,
                backgroundColor: ['#bc658d','#82c4c3','#f9d89c','#f5a7a7'],
              }
            ]
          },
          options: {}
        });

        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: bar_name,
            datasets: [
              {
                data: bar_value,
                backgroundColor: ['#654062', '#ff9c71', '#fbd46d', '#e8ead3', '#f08a5d','#b83b5e'],
              }
            ]
          },
          options: {
            legend: {
              display: false
            }
          }
        });
      })
  }

}
