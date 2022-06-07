import useConfig from 'config';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import './App.css';
import useRoutes from "./routes";
import ParticlesBackground from 'views/components/ParticlesBackground';
import Particles from "react-tsparticles";
import Container from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  //Routes
  const Router = useRoutes();

  /** Config */
  const { useStoreConfig, useInterceptor } = useConfig();
  const { persistor, store } = useStoreConfig();

  /** Interceptors */
  useInterceptor();

  const particlesInit = async (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container: Container) => {
    console.log(container);
  };

  return (
    <Provider store={store}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 3,
              },
            },
          },
          particles: {
            color: {
              value: "#37b8f5",
            },
            links: {
              color: "#304490",
              distance: 110,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <PersistGate persistor={persistor} loading={null}>
        <React.Suspense fallback={<p>Cargando...!</p>}>
          {Router}
        </React.Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
