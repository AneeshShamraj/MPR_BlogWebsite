import React from "react";
import DropDownComponent from "../DropDown";
// import { InputComponentWrapper, StyledSearchBar, SvgWrapper } from "./styles";
import "./styles.css";
const SearchBarComponent = ({
  placeholder,
  onChange,
  options,
  customStyles,
}) => (
  <div className="styled-search-bar">
    <div className="svg-wrapper"></div>
    <div className="input-component-wrapper">
      {/* <DropDownComponent
        placeholder={placeholder ?? ""}
        options={options}
        onChange={onChange}
        isMulti={true}
        customStyles={customStyles}
      /> */}
      <form>
      <input
      placeholder="Search"
      
      ></input>
      
      </form>
    </div>
  </div>
);

export default SearchBarComponent;
