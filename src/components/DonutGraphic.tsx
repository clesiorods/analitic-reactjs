import ReactEcharts from "echarts-for-react";

// var echarts = require("echarts");

export function DonutGraphic() {

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false,
      orient: 'vertical',
      left: 'right'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '85%',
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 3
        },
        label: {
          position: 'inner',
          fontSize: 14,
          color: '#ffffff'
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 5,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return <ReactEcharts option={option} />;

}