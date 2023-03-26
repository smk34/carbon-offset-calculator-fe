import React from "react";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import numeral from "numeral";
import unixToMY from "../../utils/unixToMY";
import StyledGraph from "../styles/Graph.styled";

function ExpenditureGraph() {
  const resultData = useSelector((state) => state.resultData);
  const data = resultData?.graphData;

  return (
    <StyledGraph>
      <ResponsiveContainer width="99%" height="99%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="25%" stopColor="#2827CC" stopOpacity={1} />
              <stop offset="100%" stopColor="#38CC77" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area dataKey="expenditure" stroke="#00D84A" fill="url(#gradient)" />

          <XAxis
            dataKey="date"
            interval={Number((data.length / 6).toFixed(0))}
            tickFormatter={(date) => {
              return unixToMY(date);
            }}
            tickMargin="6"
          />

          <YAxis
            dataKey="expenditure"
            axisLine={false}
            tickLine={false}
            tickFormatter={(cost) => `$${numeral(cost).format("0,000a")}`}
          />
          <CartesianGrid vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </StyledGraph>
  );
}

export default ExpenditureGraph;
