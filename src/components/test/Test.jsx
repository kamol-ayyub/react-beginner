import { useState } from 'react';

export const Test = () => {
  const [numberInput, setNumberInput] = useState(null);
  return (
    <div>
      <input
        type='date'
        value={numberInput}
        onChange={(e) => {
          let num = e.target.valueAsNumber();
          setNumberInput(num);
        }}
      />
    </div>
  );
};
