import React from "react";
import ReactDOM from "react-dom";
import Row from "../components/Row";
import { shallow } from "enzyme";

describe("Row Render Test", () => {
  it("renders correctly the row with data", () => {
    const row = ["info1", "info2", "info3", "info4", "info5", "info6", "info7"];

    const appComponent = shallow(<Row row={row} />);
    expect(appComponent.getElements()).toMatchSnapshot();
  });
});
