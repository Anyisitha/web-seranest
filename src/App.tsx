import useConfig from 'config';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import './App.css';
import useRoutes from "./routes";


function App() {
  //Routes
  const Router = useRoutes();

  /** Config */
  const { useStoreConfig, useInterceptor } = useConfig();
  const { persistor, store } = useStoreConfig();

  /** Interceptors */
  useInterceptor();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <React.Suspense fallback={<p>Cargando...!</p>}>
          {Router}
        </React.Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
