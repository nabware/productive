import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList.js";
import TEST_TODOS from "./_testCommon.js";

describe("smoketest", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList todos={TEST_TODOS} />);
  });

  it("displays all todos", function () {
    const { getByText } = render(<EditableTodoList todos={TEST_TODOS} />);

    expect(getByText("test1title")).toBeInTheDocument();
    expect(getByText("test1description")).toBeInTheDocument();
    expect(getByText("(priority: 1)")).toBeInTheDocument();

    expect(getByText("test2title")).toBeInTheDocument();
    expect(getByText("test2description")).toBeInTheDocument();
    expect(getByText("(priority: 2)")).toBeInTheDocument();

    expect(getByText("test3title")).toBeInTheDocument();
    expect(getByText("test3description")).toBeInTheDocument();
    expect(getByText("(priority: 3)")).toBeInTheDocument();
  });

  it("snapshot", function () {
    const { container } = render(<EditableTodoList todos={TEST_TODOS} />);
    expect(container).toMatchSnapshot();
  });
});

