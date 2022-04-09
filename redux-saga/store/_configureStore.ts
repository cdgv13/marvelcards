import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from '../_rootReducer';
import {watcherSaga} from '../_rootSaga';
const sagaMiddleware = createSagaMiddleware();

const _store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(watcherSaga);

export default _store;
