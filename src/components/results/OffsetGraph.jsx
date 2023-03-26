import React from "react";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import unixToMY from "../../utils/unixToMY";
import StyledGraph from "../styles/Graph.styled";

function OffsetGraph() {
  const resultData = useSelector((state) => state.resultData);
  const data = resultData?.graphData;

  console.log('jskjksjkjs',resultData)
  console.log('hhhhhhhh',data)
  return (
    <StyledGraph>
      <ResponsiveContainer width="99%" height="99%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="offsetGradient" x1="1" x2="0" y1="0" y2="0">
              <stop offset="10%" stopColor="#1c99ff" stopOpacity={1} />
              <stop offset="75%" stopColor="#1c99ff" stopOpacity={0.4} />
            </linearGradient>
          </defs>

          <Area
            dataKey="offset"
            stroke="#00BC40 #4C3AE3"
            fill="url(#offsetGradient)"
          />
          <ReferenceLine
            y={resultData?.dataToSimulate?.monthlyEmissions}
            stroke="#00D84A"
            strokeWidth={3}
            ifOverflow="extendDomain"
            fill="none"
          />

          <XAxis
            dataKey="date"
            interval={Number((data.length / 6).toFixed(0))}
            tickFormatter={(date) => {
              return unixToMY(date);
            }}
            tickMargin="6"
          />

          <YAxis
            dataKey="offset"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}kg`}
          />
          <CartesianGrid vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </StyledGraph>
  );
}

export default OffsetGraph;
