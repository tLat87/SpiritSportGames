import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import settingsReducer from './slices/zeusWord';
import challengesReducer from './slices/challengesSlice';

const rootReducer = combineReducers({
  settings: settingsReducer,
  challenges: challengesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
