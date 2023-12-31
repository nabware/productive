import React, { useState } from "react";

const DEFAULT_FORM_DATA = {
  title: "",
  description: "",
  priority: 1
};

/** Form for adding.
 *
 * State:
 * - formData: { title, description, priority }
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

function TodoForm({ initialFormData = DEFAULT_FORM_DATA, handleSave }) {
  const [formData, setFormData] = useState(initialFormData);

  /** Convert priority form input to number and update. */
  function handlePriorityChange(evt) {
    const { name, value } = evt.target;

    setFormData(currentFormData => {
      return { ...currentFormData, [name]: Number(value) };
    });
  }

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(currentFormData => {
      return { ...currentFormData, [name]: value };
    });
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    if(formData.title === ""){
      return alert("Must include a title!")
    }
    handleSave(formData);
    setFormData({ ...DEFAULT_FORM_DATA });
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>

      <div className="mb-3">
        <input
          id="newTodo-title"
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
          aria-label="Title"
        />
      </div>

      <div className="mb-3">
        <textarea
          id="newTodo-description"
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Description"
        />
      </div>

      <div className="mb-3 d-flex justify-content-between">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor="newTodo-priority"
            className="d-inline-flex">Priority:&nbsp;&nbsp;
          </label>
          <select id="newTodo-priority"
            name="priority"
            value={formData.priority}
            onChange={handlePriorityChange}
            className="form-control form-control-sm d-inline-flex"
          >
            <option value={1}>Ultra-Über</option>
            <option value={2}>Über</option>
            <option value={3}>Meh</option>
          </select>
        </div>
        <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
          Gø!
        </button>
      </div>

    </form>
  );
}

export default TodoForm;
