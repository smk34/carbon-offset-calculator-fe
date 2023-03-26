import React from "react";
import { useSelector } from "react-redux";
import numeral from "numeral";
import unixToMY from "../../utils/unixToMY";
import StyledSummary from "../styles/Summary.styled";
import ContentContainer from "../styles/ContentContainer.styled";

function Summary() {
  const dataToSimulate = useSelector((state) => state.resultData?.dataToSimulate);
  const {
    trees,
    cost,
    totalYears,
    carbonNeutralDate,
    finalMonthlyOffset,
    monthlyEmissions,
  } = dataToSimulate;

  return (
    <ContentContainer>
      <StyledSummary>
        <h2>SUMMARY</h2>
        <ul>
          <li>
            <p>
              {carbonNeutralDate ? (
                <>
                  You will achieve carbon neutrality in{" "}
                  <span>{unixToMY(carbonNeutralDate, true, true)}</span> with{" "}
                  <span>{trees} trees</span> planted.
                </>
              ) : (
                <>
                  You will only offset{" "}
                  <span>
                    {((finalMonthlyOffset / monthlyEmissions) * 100).toFixed(2)}
                    %{" "}
                  </span>{" "}
                  of your CO<sub>2</sub> emissions. Purchase more trees to
                  achieve carbon neutrality.
                </>
              )}
            </p>
          </li>
          <li>
            <p>
              Your monthly maintenance cost at this point will be{" "}
              <span>${numeral(cost?.costPerYear).format("0,000,000.00")}</span>.
            </p>
          </li>
          <li>
            <p>
              Your total expenditure over roughly {totalYears} years is{" "}
              <span>${numeral(cost?.totalExpense).format("0,000,000.00")}</span>.
              This comprises{" "}
              <span>${numeral(cost?.initialFixedCost).format("0,000,000.00")}</span> in
              purchase costs and{" "}
              <span>${numeral(cost?.totalCostPerYear).format("0,000,000.00")}</span>{" "}
              in maintenance fees.
            </p>
          </li>
        </ul>
      </StyledSummary>
    </ContentContainer>
  );
}

export default Summary;
