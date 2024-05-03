
import { ApexOptions } from "apexcharts";


export const toChartLine = (data: any[], label: string, column: string, cross: boolean) => {

    const labels:any[] = [];
    const render: any[] = [];

    data.forEach((item: any) => {
        if (!labels.includes(item[label]) || !cross) {
            labels.push(item[label]);
        }
    });

    

    labels.forEach((l: any) => {
        const values = data.filter((item: any) => item[label] === l);
        const total = values.reduce((acc: any, item: any) => acc + item[column].length, 0);
        render.push(total);
    });

    const series = [{
        name: column,
        data: render
    }]

    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: labels,
        }
    }

    return { series, options }
}
