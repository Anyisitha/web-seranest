import useModels from "models";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";

const useStoreConfig = () => {
    /** Models */
    const { useReducers } = useModels();
    const reducers = useReducers(),
        initialState = {},
        persistConfig = {
            key: "root",
            storage: storage,
        };

    let middleware = [thunk]

    const persistReduce = persistReducer(persistConfig, reducers);

    if (process.env.NODE_ENV === "development") {
        const reduxInmmutableStateInvariant =
            require("redux-immutable-state-invariant").default();
        middleware = [...middleware, reduxInmmutableStateInvariant];
    }

    const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

    let store = createStore(
        persistReduce,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );

    const persistor = persistStore(store);

    return {
        store,
        persistor
    };
}

export default useStoreConfig;