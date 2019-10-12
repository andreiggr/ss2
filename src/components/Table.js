import React from "react";
import Row from "./Row";
import TableHeader from "./TableHeader";

const Table = ({ table }) => {
  const tableHeader = table[0];

  const tableData = [...table.slice(1)];

  return (
    <div>
      <TableHeader headerData={tableHeader} />
      {tableData.map((row, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "1000px"
          }}
          key={index}
        >
          <Row row={row} />
        </div>
      ))}
    </div>
  );
};

export default Table;
