import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";


export function DonutGraphic() {

  const options: ApexOptions = {
    chart: {
      // type: 'donut',
    },
    labels: [
      '<span style="margin-top: -15px; width: 300px; white-space: nowrap !important;" >Ações & BDRs </span>', 
      '<span style="margin-top: -15px; width: 300px; white-space: nowrap !important;" >Fundos Imobiliários </span>', 
      '<span style="margin-top: -15px; width: 300px; white-space: nowrap !important;" >Renda Fixa </span>', 
      '<span style="margin-top: -15px; width: 300px; white-space: nowrap !important;" >Fundos de Investimento </span>'
    ],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%',
          height: '50%'
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'right',
      horizontalAlign: 'left',
      floating: false,
      fontSize: '14px',
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: 300,
      // height: undefined,
      // tooltipHoverFormatter: undefined,
      // customLegendItems: [],
      offsetX: -15,
      offsetY: 0,
      labels: {
        colors: undefined,
        useSeriesColors: false
      },
      markers: {
        width: 8,
        height: 40,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 4,
        customHTML: undefined,
        // onClick: function() {alert()},
        offsetX: 0,
        offsetY: 0
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0
      },
      onItemClick: {
        toggleDataSeries: true
      },
      onItemHover: {
        highlightDataSeries: true
      },
    }
  };

  const series = [44, 55, 41, 32];

  return (


    <ReactApexChart
      options={options}
      series={series}
      type="pie"
      height={'200px'}
    // width={'100%'}
    />

  );
}