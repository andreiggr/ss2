import React, { useEffect } from "react";
import { connect } from "react-redux";
import { itemsFetchData, applyFilter } from "./actions/items";
import Table from "./components/Table";
import Filter from "./components/Filter";


///this line will be reverted
const apiUrl =
  "https://spreadsheets.google.com/feeds/list/10inbJvocvQP2xCCRPPqIOOPYt8w9SlwsqzPMqrY2Il8/onsxn4s/public/values?alt=json";

const App = ({ items, fetchData}) => {
  useEffect(() => {
    fetchData(apiUrl);
  }, []);

  return (
    <div>
      <p>Home page</p>
      <Filter
        title="Type"
      />
      <Table table={items} />
    </div>
  );
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
    fetchData: url => dispatch(itemsFetchData(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
