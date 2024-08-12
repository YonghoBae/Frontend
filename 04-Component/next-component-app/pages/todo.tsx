import React, { useState } from 'react';

import TodoRegist from '@/components/todo-regist';
import TodoTemplate from '@/components/todo-template';

import { TodoType } from '@/interface/todo';
import TodoList from '@/components/todo-list';

const Todo = () => {
  const [todo, setTodo] = useState<TodoType>({
    title: '',
    desc: '',
    selected: false,
  });

  const [todos, setTodos] = useState<TodoType[]>([]);

  const todoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const onSave = () => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index: number) => {
    const filteredTodos = todos.filter(
      (todo: TodoType, i: number) => i !== index,
    );
    setTodos(filteredTodos);
  };

  return (
    <TodoTemplate>
      <TodoRegist todo={todo} todoChange={todoChange} onSave={onSave} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </TodoTemplate>
  );
};

export default Todo;
