import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todo, update }) {
  const { title, description, priority, isComplete } = todo;

  function toggleComplete() { update({ ...todo, isComplete: !isComplete }); }

  return (
    <div className="Todo">
      <div>
        {isComplete
          ? <s onClick={toggleComplete}>{title}</s>
          : <b onClick={toggleComplete}>{title}</b>}
        &nbsp;<small>(priority: {priority})</small>
      </div>
      <div><small>{description}</small></div>
    </div>
  );
}

export default Todo;
