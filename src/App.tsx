import React from 'react';
import './App.css';
import useRoutes from "./routes";

function App() {
  //Routes
  const Router = useRoutes();

  return (
    <React.Suspense fallback={<p>Loading...!</p>}>
      {Router}
    </React.Suspense>
  );
}

export default App;
