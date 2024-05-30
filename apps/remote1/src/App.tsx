import React, { Suspense } from 'react';

const Demo = React.lazy(() => import('./Demo'));

function App() {
  return (
    <div>
      <Suspense fallback="loading...">
        <Demo />
      </Suspense>
    </div>
  );
}

export default App;
