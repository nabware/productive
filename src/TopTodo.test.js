import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";
import TEST_TODOS from "./_testCommon.js";

describe("top todo", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={TEST_TODOS} />);
  });

  it("contains top priority todo", function () {
    const result = render(<TopTodo todos={TEST_TODOS} />);
    expect(result.queryByText("test1title")).toBeInTheDocument();
    expect(result.queryByText("test2title")).not.toBeInTheDocument();
    expect(result.queryByText("test3title")).not.toBeInTheDocument();
  });

  it ("snapshot", function () {
    const { container } = render(<TopTodo todos={TEST_TODOS} />);
    expect(container).toMatchSnapshot();
  });
});

