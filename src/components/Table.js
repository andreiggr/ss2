import React from "react";
import Row from "./Row";
import TableHeader from "./TableHeader";
import { connect } from "react-redux";
import applyFilter from "../utils/applyFilter";

const Table = ({ table, filter }) => {
  const tableHeader = table[0];
  const tableData = [...table.slice(1)];
  const tableFiltered = applyFilter(tableData, filter)

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TableHeader headerData={tableHeader} />
      {tableFiltered.map((row, index) => (
        <Row key={index} row={row} />
      ))}
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
