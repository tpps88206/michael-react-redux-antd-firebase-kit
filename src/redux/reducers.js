import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import auth from '@/redux/slices/auth';

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    auth,
  });

export default reducers;
