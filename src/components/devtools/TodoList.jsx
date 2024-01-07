import styles from './TodoItem.module.css';

export const TodoList = ({ todos, removeTodo }) => {
  const something = expensiveCalculation(1);
  return (
    <div className={styles['wrapper']}>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            onClick={() => removeTodo(todo.id)}
            className={styles['todo-item']}
          >
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log('Calculating...');
  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
};
