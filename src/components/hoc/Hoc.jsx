import { useState, useEffect } from 'react';

function withData(Component, url) {
  return function (props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      setIsLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setData(data);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, [url]);
    return (
      <Component data={data} isLoading={isLoading} error={error} {...props} />
    );
  };
}

const FirstComponent = ({ isLoading, error, data }) => {
  if (isLoading) {
    return <h1>Loading post</h1>;
  }
  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
};
const SecondComponent = ({ isLoading, error, data }) => {
  if (isLoading) {
    return <h1>Loading user</h1>;
  }
  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
    </div>
  );
};
const userUrl = 'https://jsonplaceholder.typicode.com/users/1';
const postUrl = 'https://jsonplaceholder.typicode.com/posts/1';
export const Post = withData(FirstComponent, postUrl);
export const User = withData(SecondComponent, userUrl);
