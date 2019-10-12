export default function applyFilter(items, filter) {
  if (filter === "all") {
    return items;
  } else {
    var data = items.map(row => (row.includes(filter) ? row : null));
    var filteredRows = data.filter(e => e !== null);

    return filteredRows;
  }
}
