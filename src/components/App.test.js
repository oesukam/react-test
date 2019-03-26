import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);
  test("should render the APP", () => {
    expect(app).toMatchSnapshot();
  });

  test("initialise the `state` with empty array", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking the `add gift` button", () => {
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });
    afterEach(() => {
      app.setState({ gifts: [] });
    });
    test("add a new gift to `state`", () => {
      expect(app.state().gifts.length).toBe(1);
    });

    test("add a new gift to the rendered list", () => {
      console.log(app.debug());
      expect(app.find(".gift-list").children().length).toBe(1);
    });
  });
});
