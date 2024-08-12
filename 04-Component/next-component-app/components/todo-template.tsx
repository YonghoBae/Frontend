import {NextPage} from 'next';

import React, {ReactNode} from 'react';
import TodoRegist from './todo-regist';
import TodoList from './todo-list';

interface TodoTemplateProps {
  children: ReactNode;
}

const TodoTemplate:NextPage<TodoTemplateProps> = ({children}) => {
  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
    </div>
  );
};

export default TodoTemplate;
