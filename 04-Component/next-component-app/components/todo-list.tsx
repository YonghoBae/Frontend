import { NextPage } from 'next';

import { TodoType } from '@/interface/todo';

type TodoListProps = {
  todos: TodoType[];
  removeTodo: (index: number) => void;
};

const TodoList = ({ todos,removeTodo }: TodoListProps) => {
  return (
    <>
      <ul>
        {todos.map((todo: TodoType, index: number) => (
          <li
            key={index}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            <span>{todo.title}</span>
            <button
              type="button"
              onClick={(e)=>removeTodo(index)}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
