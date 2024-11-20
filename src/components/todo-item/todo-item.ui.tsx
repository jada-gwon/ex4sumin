type TodoItemProps = {
  content: string;
  isDone: boolean;
  due?: string;
};

function TodoItem(props: TodoItemProps) {
  const { content, isDone, due } = props;

  return (
    <div>
      <input type="checkbox" defaultChecked={isDone} />
      <input type="text" defaultValue={content} readOnly={isDone} />
      <input type="date" defaultValue={due} readOnly={isDone} />
    </div>
  );
}

export default TodoItem;
