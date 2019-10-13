import React from "react";
import ReactDOM from "react-dom";
import { Filter } from "../components/Filter";
import { shallow } from "enzyme";

describe("Filter Render Test", () => {
  it("displays title and options ok", () => {
    const title = "mockTitle";
    const appComponent = shallow(<Filter title={title} />);

    expect(appComponent.getElements()).toMatchSnapshot();
  });
});
