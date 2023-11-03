import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";
import TEST_TODOS from "./_testCommon.js";

describe("todo", function () {
  it("renders without crashing", function () {
    render(<Todo todo={TEST_TODOS[0]} />);
  });

  it("contains expected title", function () {
    const result = render(<Todo todo={TEST_TODOS[0]} />);
    expect(result.queryByText("test1title")).toBeInTheDocument();
  });

  it ("snapshot", function () {
    const { container } = render(<Todo todo={TEST_TODOS[0]} />);
    expect(container).toMatchSnapshot();
  });
});

