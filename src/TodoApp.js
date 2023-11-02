import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

const DEFAULT_TODOS = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
]

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 * TODO: destructure object for visual
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos = DEFAULT_TODOS }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    // TODO: could be where convert priority to number
    setTodos(t => [...t, {...newTodo, id: uuid()}])
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos.map(t => t.id === updatedTodo.id ? { ...updatedTodo } : t));
  }
// TODO: continue to use callback pattern
  /** delete a todo by id */
  function remove(id) {
    setTodos(todos.filter(t => t.id !== id));
  }
// TODO: consistent logic
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
            todos.length !== 0
            && <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
          }

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create}/>
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;