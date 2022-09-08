import ReactEcharts from "echarts-for-react";

var echarts = require("echarts");

function AreaGraphic() {

    const option = {
        color: ['#80FFA5', '#00DDFF'],
        title: {
            // text: 'Gradient Stacked Area Chart'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },

        legend: {
            data: ['IPCA', 'Minha Carteira']
        },

        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },

        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set']
            }
        ],

        yAxis: 
            {
                type: 'value',
                interval: 30
            }
        ,

        series: [
            {
                name: 'IPCA',
                type: 'line',
                // stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#00e396'
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.6,

                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(1, 193, 236, 0.108)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [11, 32, 45, 32, 34, 52, 41, 50, 71]
            },
            {
                name: 'Minha Carteira',
                type: 'line',
                // stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#3b9eea'
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.6,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(77, 119, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(186, 234, 241, 0.139)'
                        }

                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [31, 40, 28, 51, 42, 109, 100, 111, 113]
            }
        ]
    };


    return <ReactEcharts option={option} />;
}
export default AreaGraphic;