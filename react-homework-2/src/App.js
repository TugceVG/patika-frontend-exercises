import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [selectedView, setSelectedView] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const newList = list.filter((item) => {
      if (selectedView === "all") {
        return true;
      }
      if (selectedView === "active") {
        return item.className === "view";
      }
      if (selectedView === "completed") {
        return item.className === "completed";
      }
    });
    setFilteredList(newList);
  }, [selectedView, list])

  const onInputChange = (event) => {
    if (event.key === "Enter") {
      if (list.some((item) =>
        item.text.toLowerCase() === event.target.value.toLowerCase())) {
        return alert("You can only add a new task");
      }
      const todo = {
        text: event.target.value,
        className: "view",
      };
      setList([...list, todo]);
      event.target.value = "";
    }
  };

  const onDeleteItem = (e, listIndex) => {
    const newList = list.filter((todo, index) => index !== listIndex);
    setList(newList);
  };

  const onCompleteItem = (e, index) => {
    const completedList = list.map((todo, i) => i === index ? { text: todo.text, className: "completed" } : todo);
    setList(completedList);
  };

  const onClearCompleted = (e) => {
    const newList = list.filter((item) => item.className !== "completed");
    setList(newList);
  };

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
              filteredList.map((todo, index) =>
                <li key={index + todo.text + todo.className} className={todo.className}>
                  <div className="view">
                    <input className="toggle" type="checkbox" onClick={(e) => onCompleteItem(e, index)} />
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
            <strong>{filteredList.length} </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className={selectedView === "all" ? "selected" : ""} onClick={() => setSelectedView("all")}>All</a>
            </li>
            <li>
              <a href="#/" className={selectedView === "active" ? "selected" : ""} onClick={() => setSelectedView("active")}>Active</a>
            </li>
            <li>
              <a href="#/" className={selectedView === "completed" ? "selected" : ""} onClick={() => setSelectedView("completed")}>Completed</a>
            </li>
          </ul>

          <button className="clear-completed" onClick={onClearCompleted}>
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
