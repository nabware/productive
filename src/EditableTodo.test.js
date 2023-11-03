import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo.js";
import TEST_TODOS from "./_testCommon.js";

describe("EditableTodo", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={TEST_TODOS[0]} />);
  });

  it("displays todo, edit, and delete buttons", function () {
    const { getByText } = render(<EditableTodo todo={TEST_TODOS[0]} />);

    expect(getByText("test1title")).toBeInTheDocument();
    expect(getByText("Del")).toBeInTheDocument();
    expect(getByText("Edit")).toBeInTheDocument();
  });

  it("edit button shows form on click and hides on save", function () {
    const dumbyHandleSave = jest.fn();
    const { container, getByText } = render(<EditableTodo todo={TEST_TODOS[0]} update={dumbyHandleSave} />);

    expect(container.querySelector("#newTodo-title")).not.toBeInTheDocument();
    expect(container.querySelector("#newTodo-description")).not.toBeInTheDocument();
    expect(container.querySelector("#newTodo-priority")).not.toBeInTheDocument();

    const editButton = getByText("Edit");
    fireEvent.click(editButton);

    expect(container.querySelector("#newTodo-title")).toBeInTheDocument();
    expect(container.querySelector("#newTodo-description")).toBeInTheDocument();
    expect(container.querySelector("#newTodo-priority")).toBeInTheDocument();

    const saveButton = getByText("Gø!");
    fireEvent.click(saveButton);

    expect(container.querySelector("#newTodo-title")).not.toBeInTheDocument();
    expect(container.querySelector("#newTodo-description")).not.toBeInTheDocument();
    expect(container.querySelector("#newTodo-priority")).not.toBeInTheDocument();
    expect(dumbyHandleSave).toHaveBeenCalledTimes(1);
  });

  it("delete button calls delete function", function () {
    const dumbyHandleDel = jest.fn();
    const { getByText } = render(<EditableTodo todo={TEST_TODOS[0]} remove={dumbyHandleDel} />);

    const deleteButton = getByText("Del");
    fireEvent.click(deleteButton);

    expect(dumbyHandleDel).toHaveBeenCalledTimes(1);
  });

  it("snapshot", function () {
    const { container } = render(<EditableTodo todo={TEST_TODOS[0]} />);
    expect(container).toMatchSnapshot();
  });
});

