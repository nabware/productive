import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

const DEFAULT_TODOS = [
  {
    id: uuid(),
    title: "Code!",
    description: "Write some code",
    priority: 2,
    isComplete: false,

  },
  {
    id: uuid(),
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
    isComplete: false,
  },
  {
    id: uuid(),
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
    isComplete: false,
  },
];

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ { id, title, description, priority }, ... ]
 *
 * State:
 * - todos: array of [ { id, title, description, priority }, ... ]
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos = DEFAULT_TODOS }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    setTodos(t => [...t, { ...newTodo, id: uuid() }]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(existingTodos =>
      existingTodos.map(t =>
        t.id === updatedTodo.id ? { ...updatedTodo } : t
      )
    );
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(existingTodos => existingTodos.filter(t => t.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {
            todos.length > 0
              ? <EditableTodoList todos={todos} update={update} remove={remove} />
              : <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          {
             todos.filter(t => !t.isComplete).length > 0
            && <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} update={update} />
            </section>
          }

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;