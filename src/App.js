import React from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "./actions/items";

const App = () => {
  return <div>Main area of app</div>;
};

const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
