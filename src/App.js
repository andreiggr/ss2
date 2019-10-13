import React, { useEffect } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "./actions/items";

import Table from "./components/Table";
import Filter from "./components/Filter";

import { apiUrl } from "./utils/api";

const logoUrl = require("../src/assets/logo.png");

export const App = ({ items, fetchData }) => {
  useEffect(() => {
    fetchData(apiUrl);
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Systems Safety Standards v2</h1>
      <img style={{ height: "200px", width: "200px" }} src={logoUrl} />
      <Filter title="Type" />
      <Table />
    </div>
  );
};

const mapStateToProps = state => {
  return {
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
