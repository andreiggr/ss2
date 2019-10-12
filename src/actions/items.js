import cleanData from "../utils/cleanData";

export function itemsHasErrored(bool) {
  return {
    type: "ITEMS_HAS_ERRORED",
    hasErrored: bool
  };
}
export function itemsIsLoading(bool) {
  return {
    type: "ITEMS_IS_LOADING",
    isLoading: bool
  };
}
export function itemsFetchDataSuccess(data) {
  const items = cleanData(data)
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items
  };
}

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(itemsIsLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(rows => dispatch(itemsFetchDataSuccess(rows)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function applyFilter(filter) {
  return {
    type: "APPLY_FILTER",
    filter
  };
}
