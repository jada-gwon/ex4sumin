import { AddTodo, TodoItem, StatusBar, Filter } from "../components";
import "./app.style.css";

function App() {
  const handleFilterChange = (active: boolean) => {
    alert(active);
  };

  return (
    <main>
      <header>
        <div>
          <h1>my-todo:</h1>
          <Filter active={false} onChange={handleFilterChange} />
        </div>
        <StatusBar totalItem={5} doneItem={2} />
      </header>
      <section>
        <ul>
          <li>
            <TodoItem content="할일 1번" isDone={true} due="2024-11-01" />
          </li>
          <li>
            <TodoItem content="할일 2번" isDone={true} due="2024-12-01" />
          </li>
          <li>
            <TodoItem content="할일 3번" isDone={false} due="2024-11-01" />
          </li>
          <li>
            <TodoItem content="할일 4번" isDone={false} due="2024-12-01" />
          </li>
          <li>
            <TodoItem content="할일 5번" isDone={false} />
          </li>
        </ul>
      </section>
      <AddTodo />
    </main>
  );
}

export default App;
