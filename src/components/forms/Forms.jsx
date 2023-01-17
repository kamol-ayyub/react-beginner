import { useState, useRef } from 'react';

export const Forms = () => {
  const [name, setName] = useState('');
  const nameRef = useRef('');
  const handleClick = (e) => {
    e.preventDefault();
    setName('hello world');
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <label htmlFor='firstname'>First name</label>
        <input
          // ref={nameRef}
          onChange={(e) => setName(e.target.value)}
          type='text'
          name='firstname'
          value={name}
        />
        <button type='submit'>Click</button>
      </form>
      <h3>{name}</h3>
    </>
  );
};
