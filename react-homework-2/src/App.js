import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const onInputChange = (event) => {
    if (event.key === "Enter") {
      const todo = {
        text: event.target.value,
        className: "view",
      };

      setList([...list, todo]);
    }
  }
  const onDeleteItem = (e, listIndex) => {
    const newList = list.filter((todo, index) => index !== listIndex);
    setList(newList);
  }
  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form>
            <input className="new-todo" onKeyPress={onInputChange} placeholder="What needs to be done?" autoFocus />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list">
            {
              list.map((todo, index) =>
                <li key={index + todo.text + todo.className} className={todo.className}>
                  <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>{todo.text}</label>
                    <button name={todo.text} className="destroy" onClick={(e) => onDeleteItem(e, index)}></button>
                  </div>
                </li>
              )
            }
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>2</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected">All</a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>

          <button className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  );
}

export default App;
