import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp.js";
import TEST_TODOS from "./_testCommon.js";

describe("smoketest", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={TEST_TODOS} />);
  });

  it("displays no todos message", function () {
    const { getByText } = render(<TodoApp initialTodos={[]} />);

    expect(getByText("You have no todos.")).toBeInTheDocument();
  });

  it("does not display top todos", function () {
    const { queryByText } = render(<TodoApp initialTodos={[]} />);

    expect(queryByText("Top Todo")).toBeNull();
  });

  // it("displays all todos", function () {
  //   const { getByText } = render(<EditableTodoList todos={TEST_TODOS} />);

  //   expect(getByText("test1title")).toBeInTheDocument();
  //   expect(getByText("test1description")).toBeInTheDocument();
  //   expect(getByText("(priority: 1)")).toBeInTheDocument();

  //   expect(getByText("test2title")).toBeInTheDocument();
  //   expect(getByText("test2description")).toBeInTheDocument();
  //   expect(getByText("(priority: 2)")).toBeInTheDocument();

  //   expect(getByText("test3title")).toBeInTheDocument();
  //   expect(getByText("test3description")).toBeInTheDocument();
  //   expect(getByText("(priority: 3)")).toBeInTheDocument();
  // });

  it("snapshot", function () {
    const { container } = render(<TodoApp initialTodos={TEST_TODOS} />);
    expect(container).toMatchSnapshot();
  });
});

