export default function useFilter(items, filter) {
  if (filter === "All") {
    return items;
  } else {

    //picks only rows that have selected filter
    var data = items.map(row => (row.includes(filter) ? row : null));

    //removes nulls
    var filteredRows = data.filter(e => e !== null);

    return filteredRows;
  }
}
