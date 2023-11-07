import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { UserService } from '../../services/user.service';
import { first } from 'rxjs';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public chartIncome: any;
  public chartSales: any;
  dataIncome: any;
  dataMonthlySales: any;
  yearly: any;
  orders: any;
  // data = [];

  constructor(
    private userService: UserService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.createChart();
    this.getYearlyStats();
    this.getAllOrder();
  }
  // Tạo mới chart thống kê
  createChart() {
    this.userService.getMonthlyOrder().subscribe((res) => {
      console.log('res ================>', res);
      this.dataIncome = res;
      let monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      let dataMonthly = [];
      let monthlyOrderCount = [];

      for (let index = 0; index < this.dataIncome.length; index++) {
        const element = this.dataIncome[index];
        console.log('element', element);

        dataMonthly.push({
          type: monthNames[element._id.month],
          income: element.amount,
        });
        monthlyOrderCount.push({
          type: monthNames[element._id.month],
          sales: element.count,
        });
        console.log('dataMonthly', dataMonthly);
        this.dataIncome = dataMonthly;
        this.dataMonthlySales = monthlyOrderCount;
        console.log('this is test ===>', this.dataIncome);
      }
      console.log('this is dataMonthly ===>', this.dataIncome);
      console.log('this is dataMonthlySales ===>', this.dataMonthlySales);

      dataMonthly.forEach((res) => {
        this.chartIncome = new Chart('chartIncome', {
          type: 'bar', //this denotes tha type of chart

          data: {
            // values on X-Axis
            labels: [res.type],
            datasets: [
              {
                label: 'Income',
                data: [res.income],
                backgroundColor: 'blue',
              },
            ],
          },
          options: {
            scales: {
              xAxes: [
                {
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Month',
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    // stepSize: 10,
                    max: 10000,
                  },
                },
              ],
            },
            aspectRatio: 2.5,
          },
        });
      });

      monthlyOrderCount.forEach((res) => {
        this.chartSales = new Chart('chartSales', {
          type: 'bar', //this denotes tha type of chart

          data: {
            // values on X-Axis
            labels: [res.type],
            datasets: [
              {
                label: 'Sales',
                data: [res.sales],
                backgroundColor: 'green',
              },
            ],
          },
          options: {
            scales: {
              xAxes: [
                {
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Month',
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    // stepSize: 10,
                    max: 10,
                  },
                },
              ],
            },
            aspectRatio: 2.5,
          },
        });
      });
    });
  }

  // THống kê theo năm
  getYearlyStats() {
    this.userService
      .getYearlyStats()
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        this.yearly = res;
      });
  }

  getAllOrder() {
    this.orderService
      .getAllOrder()
      .pipe(first())
      .subscribe((res) => {
        console.log('order', res);
        this.orders = res;
      });
  }
}
