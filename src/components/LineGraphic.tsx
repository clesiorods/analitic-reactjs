import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";


export function LineGraphic() {

    const options: ApexOptions = {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: true
          }
        },
      };


    const series = [{
        name: 'IBOVESPA',
        data: [31, 40, 28, 51, 42, 109, 100, 111, 113]
      }, {
        name: 'Minha Carteira',
        data: [11, 32, 45, 32, 34, 52, 41, 50, 71]
      }];
      
    return(
    
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />

    );
}