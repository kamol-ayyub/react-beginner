// import React from 'react';

const LazyComp = () => {
  return <div>LazyComp</div>;
};

// // app.js's code for lazy loading
// const LazyComp = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import('./components/lazy/Lazy'));
//     }, 5000);
//   });
// });
// // app.js's code for lazy loading

export default LazyComp;
