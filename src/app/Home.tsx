<<<<<<< HEAD

=======
import Chart from "react-apexcharts";
import { toChartBar, toChartDonut, toChartLine } from "../utils/charts";
import { USER_DATA } from "../data/dummy";

export default function Home() {
  const { series1, options1 } = toChartBar(USER_DATA, "role", "status", false);
  const { series2, options2 } = toChartDonut(USER_DATA, "role", "status");
  const { series3, options3 } = toChartLine(
    USER_DATA,
    "role",
    "status",
    true,
    "Chart Line exemple"
  );
>>>>>>> 1b84ecf28dc8fe5dbfa4e6ccd06bd6b3260be7d6

  return (
    <>
      <div className="container p-10">
        <h1>Home</h1>

<<<<<<< HEAD

    return(<>

        <div className="w-48">

        </div>
    </>)
}
=======
        <Chart
          options={options1}
          series={series1}
          type={options1.chart?.type}
          height={350}
        />
        <Chart
          options={options2}
          series={series2}
          type={options2.chart?.type}
          height={350}
        />
        <Chart
          options={options3}
          series={series3}
          type={options3.chart?.type}
          height={350}
        />
      </div>
    </>
  );
}
>>>>>>> 1b84ecf28dc8fe5dbfa4e6ccd06bd6b3260be7d6
