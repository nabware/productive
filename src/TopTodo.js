import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos, update }) {
  if (todos.length === 0) return null;

  const incompleteTodos = todos.filter(t => !t.isComplete);
  if (incompleteTodos.length === 0) return null;
  // lowest-priority # is the highest priority
  let top = incompleteTodos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, incompleteTodos[0]);

  return <Todo todo={top} update={update} />;
}

export default TopTodo;