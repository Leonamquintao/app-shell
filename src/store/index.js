import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//Reducers
import { mainReducer } from './mainReducer';

const Reducers = combineReducers({
  mainReducer: mainReducer,
})

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };