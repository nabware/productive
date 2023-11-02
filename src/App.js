import React from "react";
import TodoApp from "./TodoApp";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

/** Site application.
 *
 * App -> TodoApp
 **/

function App() {
  return (
      <main className="App">
        <header className="container-fluid pt-4 pb-1">
          <div className="container">
            <h1>Prøductïv</h1>
            <p className="lead">The best name in todo list management.</p>
          </div>
        </header>

        <section className="container mt-4">
          <TodoApp  />

          <Footer />
        </section>
      </main>
  );
}

export default App;
