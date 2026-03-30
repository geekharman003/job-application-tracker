import { RechartsDevtools } from "@recharts/devtools";
import { Pie, PieChart, Legend, Tooltip } from "recharts";

// const data = [
//   {
//     fill: "#0088FE",
//     name: "Group A",
//     value: 400,
//   },
//   {
//     fill: "#00C49F",
//     name: "Group B",
//     value: 300,
//   },
//   {
//     fill: "#FFBB28",
//     name: "Group C",
//     value: 300,
//   },
//   {
//     fill: "#FF8042",
//     name: "Group D",
//     value: 200,
//   },
// ];

function PieChartComponent({data}) {
  return (
    <PieChart
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "500px",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius="50%"
        fill="#3a32cb"
      />
      <Legend style={{border:"2px solid red"}}/>
      <Tooltip />
    </PieChart>
  );
}

export default PieChartComponent;
