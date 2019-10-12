import React from "react";

const Filter = ({ title, options }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <p style={{ marginRight: "15px" }}>{title}</p>
      <select>
        {options.map((title, i) => (
          <option key={i} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
