import React from "react";

const TableHeader = ({ headerData }) => {
  return (
    <div style={{ display: "flex" }}>
      {headerData &&
        headerData.map((item, i) => (
          <div
            style={{
              width: "150px",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              border: "1px solid black",
              padding: "5px 5px 25px 5px",
              background: "#EEEFF5"
              
            }}
            key={i}
          >
            <p style={{fontWeight:"bold"}}>{item.$t}</p>
          </div>
        ))}
    </div>
  );
};

export default TableHeader;
