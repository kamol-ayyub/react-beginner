import '../../App.css';
import { useState, useEffect } from 'react';

const mainUrl = 'https://jsonplaceholder.typicode.com/users';
export function Effect() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getAllUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(mainUrl);
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
      console.log(data);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setIsError(true);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className='App'>
      {isError && <h1>There is no user list!</h1>}
      {users && users.length > 0 && !isLoading && <h1>Github users list!</h1>}
      {isLoading && <h1>Loading...</h1>}

      {!isError &&
        users &&
        users.length > 0 &&
        users.map((user) => {
          const { username, phone, email } = user;
          return (
            <div key={user.id} className='card'>
              <div>
                <h4>Username:</h4> <p>{username}</p>
              </div>
              <div>
                <h4>Email:</h4> <p>{email}</p>
              </div>
              <div>
                <h4>Phone:</h4> <p>{phone}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
