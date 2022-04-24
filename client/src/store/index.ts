import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import articleReducer from "./articles/reducers"
import authReducer from "./auth/reducer";
import stockReducer from "./stock/reducers";
import clientReducer from "./clients/reducer";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["authReducer"],
};

export const rootReducer = combineReducers({
  auth: authReducer,
  articles: articleReducer,
  stock: stockReducer,
  clients: clientReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
