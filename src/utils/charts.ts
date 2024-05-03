import { ApexOptions } from "apexcharts";

export const toChartLine = (
  data: any[],
  label: string,
  column: string,
  cross: boolean,
  text: string
) => {
  const labels: any[] = [];
  const render: any[] = [];

  data.forEach((item: any) => {
    if (!labels.includes(item[label]) || !cross) {
      labels.push(item[label]);
    }
  });

  labels.forEach((l: any) => {
    const values = data.filter((item: any) => item[label] === l);
    const total = values.reduce(
      (acc: any, item: any) => acc + item[column].length,
      0
    );
    render.push(total);
  });

  const series3 = [
    {
      name: column,
      data: render,
    },
  ];

  const options3: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: text,
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: labels,
    },
  };

  return { series3, options3 };
};

export const toChartDonut = (data: any[], label: string, column: string) => {
  const labels: any[] = [];
  const render: any[] = [];

  data.forEach((item: any) => {
    if (!labels.includes(item[label])) {
      labels.push(item[label]);
    }
  });

  labels.forEach((l: any) => {
    const values = data.filter((item: any) => item[label] === l);
    const total = values.reduce(
      (acc: any, item: any) => acc + item[column].length,
      0
    );
    render.push(total);
  });

  const series2 = render;

  const options2: ApexOptions = {
    chart: {
      width: 380,
      type: "donut",
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return { series2, options2 };
  ``;
};

export const toChartBar = (
  data: any[],
  label: string,
  column: string,
  cross: boolean
) => {
  const labels: any[] = [];
  const render: any[] = [];

  data.forEach((item: any) => {
    if (!labels.includes(item[label]) || !cross) {
      labels.push(item[label]);
    }
  });

  labels.forEach((l: any) => {
    const values = data.filter((item: any) => item[label] === l);
    const total = values.reduce(
      (acc: any, item: any) => acc + item[column].length,
      0
    );
    render.push(total);
  });

  const series1 = [
    {
      name: column,
      data: render,
    },
  ];

  const options1: ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: labels,
    },
    yaxis: {
      title: {
        text: column,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val;
        },
      },
    },
  };

  return { series1, options1 };
};
