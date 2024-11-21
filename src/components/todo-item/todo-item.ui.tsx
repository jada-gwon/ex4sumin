type TodoItemProps = {
  content: string;
  isDone: boolean;
  due?: string;
};

function TodoItem(props: TodoItemProps) {
  const { content, isDone, due } = props;

  return (
    <div className="flex items-center gap-2 h-10">
      <input type="checkbox" defaultChecked={isDone} />
      <div className="grow border-b border-zinc-400 flex">
        <input
          type="text"
          defaultValue={content}
          readOnly={isDone}
          className="outline-none grow"
        />
        <input
          type="date"
          defaultValue={due}
          readOnly={isDone}
          className="grow outline-none basis-24 max-w-24 text-xs text-left text-gray-600 ml-2"
        />
      </div>
    </div>
  );
}

export default TodoItem;
