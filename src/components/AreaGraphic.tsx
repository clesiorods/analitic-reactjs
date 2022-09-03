import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";


export function LineGraphic() {

  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: false,
          // customIcons: []
        },
        export: {
          csv: {
            filename: 'Gráfico',
            columnDelimiter: ',',
            headerCategory: 'category',
            headerValue: 'value',
            // dateFormatter(timestamp) {
            //   return new Date(timestamp).toDateString()
            // }
          },
          svg: {
            filename: 'Gráfico',
          },
          png: {
            filename: 'Gráfico',
          }
        },
        autoSelected: 'zoom'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 3,
      dashArray: 0,
    },
  };

  const series = [{
    name: 'IBOVESPA',
    data: [31, 40, 28, 51, 42, 109, 100, 111, 113]
  }, {
    name: 'Minha Carteira',
    data: [11, 32, 45, 32, 34, 52, 41, 50, 71]
  }];

  return (


    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={'100%'}
      width={'100%'}
    />

  );
}