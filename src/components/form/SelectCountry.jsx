import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import countriesCO2 from "../../config/countriesCO2";
import ErrorMessage from "./ErrorMessage";
import StyledInput from "../styles/Input.Styled";
import SelectCountryContainer from "../styles/SelectCountryContainer.styled.js";

export default function SelectCountry(props) {
  const { control, errors, watchAnnualC02Field, setValue } = props;
  const [customActive, setCustomActive] = useState(false);
  const optionListInit = countriesCO2.map((country) => {
    return {
      value:
        watchAnnualC02Field !== undefined && 
        countriesCO2.find(
          (c) => c.annualCO2PerCapita.toString() === watchAnnualC02Field
        ) === undefined
          ? watchAnnualC02Field
          : country.annualCO2PerCapita.toString(), 
      label: country.name,
    };
  });
  const [optionList, setOptionList] = useState(optionListInit);

  useEffect(() => {
    if (
      watchAnnualC02Field !== undefined &&
      optionList.find((c) => c.value === watchAnnualC02Field).label === "Custom"
    ) {
      setCustomActive(true);
    } else {
      setCustomActive(false);
      let OLCopy = optionList;
      OLCopy[OLCopy.length - 1].value = "";
      setOptionList(OLCopy);
    }
  }, [watchAnnualC02Field, optionList]);

  return (
    <SelectCountryContainer>
      <div>
        <Controller
          name="annualCO2Emissions"
          control={control}
          render={({ value, field }) => (
            <Select
              options={optionList}
              defaultInputValue={
                field.value === undefined
                  ? ""
                  : optionList.find((c) => c.value === field.value).label
              }
              onChange={(val) => field.onChange(val.value)}
              placeholder="Select country"
              aria-label="Select your country to set your average annual CO2 emmisions "
            />
          )}
          rules={{
            required: true,
            maxLength: 6,
            pattern: /^[0-9]*[.]?[0-9]*$/,
          }}
        />
        {!customActive && errors.annualCO2Emissions && (
          <ErrorMessage type={errors.annualCO2Emissions.type} />
        )}
      </div>
      {customActive && (
        <div>
          <StyledInput
            defaultValue={watchAnnualC02Field}
            onChange={(e) => {
              setValue("annualCO2Emissions", e.target.value);
              let OLCopy = optionList;
              OLCopy[OLCopy.length - 1].value = e.target.value;
              setOptionList(OLCopy);
            }}
            // }
          />
          {errors.annualCO2Emissions && (
            <ErrorMessage type={errors.annualCO2Emissions.type} />
          )}
        </div>
      )}
    </SelectCountryContainer>
  );
}
