import { useState, useCallback } from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

import { todoList } from './constants.ts';

import styles from './Todo.module.css';

export const Todo = () => {
  const [todos, setTodos] = useState(todoList);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className={styles['todo-container']}>
      <h1 className={styles['todo-title']}>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList removeTodo={removeTodo} todos={todos} />
    </div>
  );
};
