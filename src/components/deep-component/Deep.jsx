import { useContext } from 'react';
import { UserIsLoggedContext } from '../../context';

export const Deep = () => {
  const value = useContext(UserIsLoggedContext);
  console.log(value, 'value in deep component');
  return <div>Deep</div>;
};
