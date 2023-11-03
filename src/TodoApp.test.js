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

  it("add new todo", function () {
    const { container, getByText, queryByText } = render(<TodoApp initialTodos={[]} />);

    expect(getByText("You have no todos.")).toBeInTheDocument();

    const titleInput = container.querySelector("#newTodo-title")
    const descriptionInput = container.querySelector("#newTodo-description")
    const priorityInput = container.querySelector("#newTodo-priority")
    const submitBtn = within(container).getByText("Gø!");

    fireEvent.change(titleInput, { target: { value: "test4title" } });
    fireEvent.change(descriptionInput, { target: { value: "test4description" } });
    fireEvent.change(priorityInput, { target: { value: 3 } });

    fireEvent.click(submitBtn);

    expect(queryByText("You have no todos.")).toBeNull();

    const editableTodo = container.querySelector(".EditableTodo");
    expect(within(editableTodo).getByText("test4title")).toBeInTheDocument();
    expect(within(editableTodo).getByText("test4description")).toBeInTheDocument();
    expect(within(editableTodo).getByText("(priority: 3)")).toBeInTheDocument();
  });

  it("edit todo and saving updates todo list", function () {
    const { container, getByText } = render(<TodoApp initialTodos={[TEST_TODOS[0]]} />);

    const editableTodo = container.querySelector(".EditableTodo");

    expect(within(editableTodo).getByText("test1title")).toBeInTheDocument();
    expect(within(editableTodo).getByText("test1description")).toBeInTheDocument();
    expect(within(editableTodo).getByText("(priority: 1)")).toBeInTheDocument();

    const editButton = getByText("Edit");
    fireEvent.click(editButton);

    const titleInput = editableTodo.querySelector("#newTodo-title")
    const descriptionInput = editableTodo.querySelector("#newTodo-description")
    const priorityInput = editableTodo.querySelector("#newTodo-priority")
    const submitBtn = within(editableTodo).getByText("Gø!");

    fireEvent.change(titleInput, { target: { value: "test4title" } });
    fireEvent.change(descriptionInput, { target: { value: "test4description" } });
    fireEvent.change(priorityInput, { target: { value: 3 } });

    fireEvent.click(submitBtn);

    expect(within(editableTodo).getByText("test4title")).toBeInTheDocument();
    expect(within(editableTodo).getByText("test4description")).toBeInTheDocument();
    expect(within(editableTodo).getByText("(priority: 3)")).toBeInTheDocument();
  });

  it("delete todo", function () {
    const { container } = render(<TodoApp initialTodos={[TEST_TODOS[0]]} />);

    const editableTodo = container.querySelector(".EditableTodo");
    expect(within(editableTodo).getByText("test1title")).toBeInTheDocument();
    expect(within(editableTodo).getByText("test1description")).toBeInTheDocument();
    expect(within(editableTodo).getByText("(priority: 1)")).toBeInTheDocument();

    const deleteBtn = within(container).getByText("Del");
    fireEvent.click(deleteBtn);

    expect(container.querySelector(".EditableTodo")).toBeNull();
  });

  it("priority changes", function () {
    const { container, queryByText } = render(<TodoApp initialTodos={TEST_TODOS} />);

    const topTodo = queryByText("Top Todo").closest("section");
    expect(within(topTodo).getByText("test1title")).toBeInTheDocument();
    expect(within(topTodo).getByText("test1description")).toBeInTheDocument();
    expect(within(topTodo).getByText("(priority: 1)")).toBeInTheDocument();

    const deleteBtn = container.querySelector(".EditableTodo-delBtn");
    fireEvent.click(deleteBtn);

    expect(within(topTodo).getByText("test2title")).toBeInTheDocument();
    expect(within(topTodo).getByText("test2description")).toBeInTheDocument();
    expect(within(topTodo).getByText("(priority: 2)")).toBeInTheDocument();
  });

  it("displays all todos", function () {
    const { container } = render(<TodoApp initialTodos={TEST_TODOS} />);

    const editableTodoList = container.querySelector(".EditableTodoList");

    expect(within(editableTodoList).getByText("test1title")).toBeInTheDocument();
    expect(within(editableTodoList).getByText("test1description")).toBeInTheDocument();
    expect(within(editableTodoList).getByText("(priority: 1)")).toBeInTheDocument();

    expect(within(editableTodoList).getByText("test2title")).toBeInTheDocument();
    expect(within(editableTodoList).getByText("test2description")).toBeInTheDocument();
    expect(within(editableTodoList).getByText("(priority: 2)")).toBeInTheDocument();

    expect(within(editableTodoList).getByText("test3title")).toBeInTheDocument();
    expect(within(editableTodoList).getByText("test3description")).toBeInTheDocument();
    expect(within(editableTodoList).getByText("(priority: 3)")).toBeInTheDocument();
  });

  it("snapshot", function () {
    const { container } = render(<TodoApp initialTodos={TEST_TODOS} />);
    expect(container).toMatchSnapshot();
  });
});

