import { AddTodo, TodoItem, StatusBar, Filter } from "../components";
import "./app.style.css";

function App() {
  const handleFilterChange = (active: boolean) => {
    alert(active);
  };

  return (
    <div className="bg-gradient-to-br from-rose-200 to-sky-200">
      <main className="h-screen max-w-md mx-auto pt-12">
        <div className="bg-white h-full rounded-t-xl flex flex-col px-4 shadow-xl">
          <header className="pt-6">
            <div className="mb-4">
              <h1 className="text-3xl">my-todo:</h1>
            </div>
            <StatusBar totalItem={5} doneItem={2} />
          </header>
          <section className="grow">
            <div className="my-3">
              <Filter active={false} onChange={handleFilterChange} />
            </div>
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
          <footer className="pt-4 pb-6">
            <AddTodo />
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
