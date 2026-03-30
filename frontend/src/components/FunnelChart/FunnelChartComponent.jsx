import { FunnelChart, Funnel, Tooltip, LabelList } from "recharts";

function FunnelChartComponent({ data }) {
  return (
    <FunnelChart
      style={{
        width: "100%",
        maxWidth: "400px",
        maxHeight: "400px",
        aspectRatio: "1",
      }}
      responsive
    >
      <Tooltip />
      <Funnel dataKey={"value"} data={data}>
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </Funnel>
    </FunnelChart>
  );
}

export default FunnelChartComponent;
