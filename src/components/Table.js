import React from "react";
import Row from "./Row";
import TableHeader from "./TableHeader";
import { connect } from "react-redux";
import useFilter from "../utils/useFilter";

export const Table = ({ items, filter }) => {
  //select data for table header
  const tableHeader = items[0];

  //select data for the main table with filters applied
  const tableData = [...items.slice(1)];
  const tableFiltered = useFilter(tableData, filter)

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TableHeader headerData={tableHeader} />
      {tableFiltered.map((row, index) => (
        <Row key={index} row={row} />
      ))}
      <p> Total results: {tableFiltered.length} </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items,
    filter: state.filter
  };
};

export default connect(mapStateToProps)(Table);
