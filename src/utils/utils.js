import _ from "lodash";

//filter data to be displayed in a more understandable way
export default function filterData(data) {
  const entry = data.feed.entry;
  const rows = entry.map(row =>
    _.filter(row, function(value, key) {
      return key.startsWith("g");
    })
  );

  //this is where we remove market sector on the second row
  const interestData = [...rows.slice(0, 1), ...rows.slice(2)];

  //completely remove market sectors & lifecycle methods + other unnecesarry data
  const cleanRows = interestData.map(row => row.slice(0, 7));
  return cleanRows;
}
