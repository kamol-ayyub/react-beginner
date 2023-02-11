import React, { Suspense, lazy } from 'react';

const LazyComp = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./components/lazy/Lazy'));
    }, 5000);
  });
});

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<h1>Loading...</h1>}>
        <LazyComp />
      </Suspense>
    </div>
  );
}
export default App;
