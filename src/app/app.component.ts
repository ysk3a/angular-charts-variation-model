import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexOptions,
  ApexTheme,
  ApexResponsive,
  ApexNonAxisChartSeries,
  ApexForecastDataPoints,
  ApexGrid,
  ApexNoData,
  ApexStates,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
// export type ChartOptions
export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis | ApexYAxis[];
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  theme: ApexTheme;
  responsive: ApexResponsive[];
  // annotations?: ApexAnnotations;
  // colors?: any[];
  // labels?: string[];
  // markers?: ApexMarkers;
  noData?: ApexNoData;
  forecastDataPoints?: ApexForecastDataPoints;
  grid: ApexGrid;
  states: ApexStates;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('apexChart', { static: false }) chart!: ChartComponent;
  public chartOptions!: ChartOptions;
  toggleDarkMode: boolean = false;
  colors: string[] = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];
  apexChartOptionForm!: FormGroup;

  constructor() {
    this.chartOptions = {
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 0,
        labels: {
          colors: undefined,
          useSeriesColors: false,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 5,
          vertical: 0,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
      noData: {
        text: 'No Data',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: '14px',
          fontFamily: undefined,
        },
      },
      forecastDataPoints: {
        count: 0,
        fillOpacity: 0.5,
        strokeWidth: undefined,
        dashArray: 4,
      },
      grid: {
        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        hover: {
          filter: {
            type: 'lighten',
            value: 0.15,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'darken',
            value: 0.35,
          },
        },
      },
      title: {
        text: undefined,
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#263238',
        },
      },
      subtitle: {
        text: undefined,
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: undefined,
          color: '#9699a2',
        },
      },
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],

      chart: {
        id: 'chart1',
        type: 'line',
        stacked: false,
        width: '100%',
        height: '100%',
        redrawOnParentResize: true,
        redrawOnWindowResize: true,
        // toolbar: {
        //   autoSelected: 'pan',
        //   show: false
        // }
        zoom: {
          autoScaleYaxis: true,
        },
        toolbar: {
          show: false,
          autoSelected: 'pan',
        },
        // brush: {
        //   target: 'chart1',
        //   enabled: true
        // },
        selection: {
          enabled: true,
        },
      },

      responsive: [
        {
          breakpoint: 200,
          options: {
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        // formatter: function (val) {
        //   return val + "%";
        // },
        // offsetY: -20,
        // style: {
        //   fontSize: '12px',
        //   colors: ["#304758"]
        // }
      },
      stroke: {
        show: true,
        width: 2,
        // colors: ["transparent"]
      },
      xaxis: {
        labels: {
          hideOverlappingLabels: false,
          trim: true,
        },
        categories: [
          'Febxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          'Mar',
          'Aprxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          'May',
          'Junxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          'Jul',
          'Augxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          'Sep',
          'Oct',
        ],
        tooltip: {
          enabled: false,
        },
        axisTicks: {
          show: true,
        },
        title: {
          text: undefined,
        },
        // tickPlacement: 'on',
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
          style: {
            color: '#FF1654',
          },
        },
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FF1654',
        },
        labels: {
          show: false,
          style: {
            colors: '#FF1654',
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      fill: {
        opacity: 1,
        // type: 'gradient', // not line
        // gradient: {
        //   shadeIntensity: 1,
        //   opacityFrom: 0.7,
        //   opacityTo: 0.9,
        //   stops: [0, 90, 100]
        // }
      },
      tooltip: {
        theme: 'light',
        x: {
          format: 'dd MMM yyyy',
        },
        y: {
          formatter: function (val: any) {
            return '$ ' + val + ' thousands';
          },
        },
      },
      theme: {
        mode: 'light',
        palette: 'palette1',
      },
    };
  }
}
