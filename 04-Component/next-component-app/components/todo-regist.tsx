import { NextPage } from 'next';
import React, { useState } from 'react';

import { TodoType } from '@/interface/todo';

type TodoRegistProps = {
  todo: TodoType;
  todoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
};
const TodoRegist = ({ todo, todoChange, onSave }: TodoRegistProps) => {
  return (
    <>
      {/* 할일 등록 영역  */}
      <form className="flex mb-4">
        <input
          type="text"
          value={todo.title}
          onChange={todoChange}
          className="flex-grow border border-gray-300 rounded px-4 py-2 mr-2 placeholder-gray-500 text-black dark:text-white dark:bg-gray-800 dark:border-gray-600"
          placeholder="Enter a todo"
        />
        <button
          type="button"
          onClick={onSave}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoRegist;
