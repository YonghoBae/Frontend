import React, { useState } from 'react';

const TodoListAll = () => {
  const [todo, setTodo] = useState<string>('');

  const [todos, setTodos] = useState<string[]>(['sample1', 'sample2']);

  const todoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const saveTodo = () => {
    if (todo != '') {
      setTodos([...todos, todo]);
    } else {
      alert('Enter a todo!');
    }

    setTodo('');
  };

  const removeItem = (e: React.MouseEvent<HTMLButtonElement>,index:number) =>{
    const filteredTodos = todos.filter((item:string,i:number)=>i !== index);
    setTodos(filteredTodos);
  }

  return (
    // 할일 컨테이너 영역
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      {/* 할일 등록 영역  */}
      <form className="flex mb-4">
        <input
          type="text"
          value={todo}
          onChange={todoChange}
          className="flex-grow border border-gray-300 rounded px-4 py-2 mr-2 placeholder-gray-500 text-black dark:text-white dark:bg-gray-800 dark:border-gray-600"
          placeholder="Enter a todo"
        />
        <button
          type="button"
          onClick={saveTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </form>

      {/* 할일목록영역 */}
      <ul>
        {todos.map((item: string, index: number) => (
          <li
            key={index}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            <span>{item}</span>
            <button type="button" onClick={(e) => removeItem(e,index)} className="text-red-500 hover:text-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListAll;
