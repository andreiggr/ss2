import React from "react";

const Row = ({ row }) => {

  return (
    <div style={{display:"flex"}}>
      {row.map((item, i) => (
        <div
          style={{
            width: "150px",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            border: "1px solid black",
            padding: "5px 5px 25px 5px"
          }}
          key={i}
        >
          {item.$t}
        </div>
      ))}
    </div>
  );
};

export default Row;