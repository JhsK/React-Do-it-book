import React from "react";
import { shallow } from "enzyme";

import Input from "../../03/Input";

describe("<Input>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });
});

describe("contains <input>", () => {
  if (
    ("renders one input",
    () => {
      const wrapper = shallow(<Input name="test_name" />);
      expect(wrapper.find("input")).toHaveLength(1);
      expect(wrapper.fint("label")).toHaveLength(1);
    })
  );
});
