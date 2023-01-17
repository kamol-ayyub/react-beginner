import { Deep } from '../';
import { UserIsLoggedContext } from '../../context';
import { useContext } from 'react';
export const Example = () => {
  const value = useContext(UserIsLoggedContext);
  console.log(value, 'value in example component');
  return (
    <>
      <UserIsLoggedContext.Provider value={false}>
        <Deep />
      </UserIsLoggedContext.Provider>
    </>
  );
};
