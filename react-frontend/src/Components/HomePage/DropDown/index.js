import React from "react";
import Select from "react-select";

const DropDownComponent = ({
  placeholder,
  options,
  onChange,
  isMulti = false,
  customStyles,
}) => {
  return (
    <>
      <Select
        options={options}
        onChange={onChange}
        styles={customStyles}
        isMulti={isMulti}
        placeholder={placeholder}
        // width="50px"
      />
    </>
  );
};

export default DropDownComponent;
