import React from "react";
import { connect } from "react-redux";
import { applyFilter } from "../actions/items";

const options = ["all", "Vertical", "Horizontal", "Supplementary"];

const Filter = ({ title, changeFilter }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <p style={{ marginRight: "15px" }}>{title}</p>
      <select onChange={() => changeFilter(event.target.value)}>
        {options.map((title, i) => (
          <option key={i} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: filter => dispatch(applyFilter(filter))
  };
};

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
