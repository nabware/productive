import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo.js";
import TEST_TODOS from "./_testCommon.js";

function dumbyHandleSave(){}

describe("todo form", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={TEST_TODOS[0]}/>);
  });

  it("displays todo, edit, and delete buttons", function () {
    const {getByText} = render(<EditableTodo todo={TEST_TODOS[0]}/>);

    expect(getByText("test1title")).toBeInTheDocument();
    expect(getByText("Del")).toBeInTheDocument();
    expect(getByText("Edit")).toBeInTheDocument();
  });

  // TODO: edit button shows form, save button hide form
  
  // it("populate input fields, submit, and clear input fields", function () {
  //   const { container, queryByText } = render(<TodoForm handleSave={dumbyHandleSave}/>);

  //   const titleInput = container.querySelector("#newTodo-title")
  //   const descriptionInput = container.querySelector("#newTodo-description")
  //   const priorityInput = container.querySelector("#newTodo-priority")
  //   const submitBtn = queryByText("Gø!");

  //   expect(titleInput).toHaveValue("");
  //   expect(descriptionInput).toHaveValue("");
  //   expect(priorityInput).toHaveValue("1");

  //   fireEvent.change(titleInput, { target: { value: "test4title" } });
  //   fireEvent.change(descriptionInput, { target: { value: "test4description" } });
  //   fireEvent.change(priorityInput, { target: { value: 3 } });

  //   expect(titleInput).toHaveValue("test4title");
  //   expect(descriptionInput).toHaveValue("test4description");
  //   expect(priorityInput).toHaveValue("3");

  //   fireEvent.click(submitBtn);

  //   expect(titleInput).toHaveValue("");
  //   expect(descriptionInput).toHaveValue("");
  //   expect(priorityInput).toHaveValue("1");
  // });

  // it("fills form with initial form data, submit, clears input fields", function () {
  //   const { container, queryByText } = render(
  //     <TodoForm initialFormData={TEST_TODOS[1]} handleSave={dumbyHandleSave}/>);

  //   const titleInput = container.querySelector("#newTodo-title")
  //   const descriptionInput = container.querySelector("#newTodo-description")
  //   const priorityInput = container.querySelector("#newTodo-priority")
  //   const submitBtn = queryByText("Gø!");

  //   expect(titleInput).toHaveValue("test2title");
  //   expect(descriptionInput).toHaveValue("test2description");
  //   expect(priorityInput).toHaveValue("2");

  //   fireEvent.change(titleInput, { target: { value: "test4title" } });
  //   fireEvent.change(descriptionInput, { target: { value: "test4description" } });
  //   fireEvent.change(priorityInput, { target: { value: 3 } });

  //   expect(titleInput).toHaveValue("test4title");
  //   expect(descriptionInput).toHaveValue("test4description");
  //   expect(priorityInput).toHaveValue("3");

  //   fireEvent.click(submitBtn);

  //   expect(titleInput).toHaveValue("");
  //   expect(descriptionInput).toHaveValue("");
  //   expect(priorityInput).toHaveValue("1");
  // });

  it ("snapshot", function () {
    const { container } = render(<EditableTodo todo={TEST_TODOS[0]}/>);
    expect(container).toMatchSnapshot();
  });
});

