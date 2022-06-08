/// <reference types="react-scripts" />
import "@testing-library/jest-dom/extend-expect";
declare module 'redux-persist/lib/storage';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

declare module "react-beautiful-dnd";
