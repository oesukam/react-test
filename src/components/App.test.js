import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const app = shallow(<App />);
describe("App", () => {
  test("should render the APP", () => {
    expect(app).toMatchSnapshot();
  });
});
