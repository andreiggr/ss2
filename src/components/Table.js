import React from "react";
import Row from "./Row";
import TableHeader from "./TableHeader";

const Table = ({ table }) => {
  const tableHeader = table[0];

  const tableData = [...table.slice(1)];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TableHeader headerData={tableHeader} />
      {tableData.map((row, index) => (
        <Row key={index} row={row} />
      ))}
    </div>
  );
};

export default Table;
