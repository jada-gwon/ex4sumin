function AddTodo() {
  return (
    <div>
      <form>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="할 일을 입력 해주세요."
            className="grow py-0.5 px-1"
          />
          <button
            type="submit"
            className="h-7 px-2 bg-blue-600 text-white rounded-md text-sm"
          >
            추가
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
