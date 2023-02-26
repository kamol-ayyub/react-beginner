import React from 'react';
function withDataFetching(WrappedComponent, url) {
  return function (props) {
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
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
      <WrappedComponent
        data={data}
        isLoading={isLoading}
        error={error}
        {...props}
      />
    );
  };
}

function ComponentA(props) {
  const { data, isLoading, error } = props;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
}

function ComponentB(props) {
  const { data, isLoading, error } = props;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <ul>
      {data?.map((item) => (
        <li key={item.id}>{item?.title}</li>
      ))}
    </ul>
  );
}

export const ComponentAWithData = withDataFetching(
  ComponentA,
  'https://jsonplaceholder.typicode.com/posts/1'
);
export const ComponentBWithData = withDataFetching(
  ComponentB,
  'https://jsonplaceholder.typicode.com/posts'
);
