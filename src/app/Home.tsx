
import Chart  from "react-apexcharts";
import { toChartLine } from "../utils/charts";
import { USER_DATA } from "../data/dummy";


export default function Home () {

    const { series, options } = toChartLine(USER_DATA, 'role', 'status', true)
    console.log({series, options})



    return(<>
        <div className="container p-10">
            <h1>Home</h1>

            <Chart options={options} series={series} type="line" height={350} />

        </div>

    </>)
}