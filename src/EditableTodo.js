import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * State:
 * - isEditable: true/false for form render
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [isEditable, setIsEditable] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditable(curr => !curr);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    setIsDeleted(true);
    setTimeout(() => remove(todo.id), 2000);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update(formData);
    toggleEdit();
   }

  return (
    <div className={`EditableTodo ${isDeleted ? "fadeOut" : ""}`}>
      {isEditable
        ? <TodoForm initialFormData={todo} handleSave={handleSave}/>
        : <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo todo={todo} update={update} />
        </div>
      }
    </div>
  );
}

export default EditableTodo;
