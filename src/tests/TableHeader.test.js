import React from "react";
import ReactDOM from "react-dom";
import { TableHeader } from "../components/TableHeader";
import { shallow } from "enzyme";

describe("TableHeader Render Test", () => {
  it("correctly display header data", () => {
    const headerData = [
      "test1",
      "test2",
      "test3",
      "test4",
      "test5",
      "test6",
      "test7"
    ];
    const appComponent = shallow(<TableHeader headerData={headerData} />);

    expect(appComponent.getElements()).toMatchSnapshot();
  });
});
