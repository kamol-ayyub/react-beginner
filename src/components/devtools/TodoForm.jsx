import { useState, memo } from 'react';
import styles from './TodoForm.module.css';

export const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    addTodo({
      id: Date.now(),
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles['todo-form']} onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type='submit'>Add Todo</button>
    </form>
  );
};
