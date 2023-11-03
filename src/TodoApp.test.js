import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import TodoApp from "./TodoApp.js";
import TEST_TODOS from "./_testCommon.js";

describe("TodoApp", function () {
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

  it("edit todo and saving updates todo list", function () {
    const { container, getByText } = render(<TodoApp initialTodos={[TEST_TODOS[0]]} />);

    const editableTodo = container.querySelector(".EditableTodo");

    expect(within(editableTodo).getByText("test1title")).toBeInTheDocument();
    expect(within(editableTodo).getByText("test1description")).toBeInTheDocument();
    expect(within(editableTodo).getByText("(priority: 1)")).toBeInTheDocument();

    const editButton = getByText("Edit");
    fireEvent.click(editButton);

    expect(editableTodo.querySelector("#newTodo-title")).toBeInTheDocument();
    expect(editableTodo.querySelector("#newTodo-description")).toBeInTheDocument();
    expect(editableTodo.querySelector("#newTodo-priority")).toBeInTheDocument();

    // const saveButton = getByText("Gø!");
    // fireEvent.click(saveButton);

    // expect(container.querySelector("#newTodo-title")).not.toBeInTheDocument();
    // expect(container.querySelector("#newTodo-description")).not.toBeInTheDocument();
    // expect(container.querySelector("#newTodo-priority")).not.toBeInTheDocument();
  });
  //Edit button saves changes/update
  //Priority changes
  //Add new todo render/ Creating todo adds to list
  //Delete todo


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

