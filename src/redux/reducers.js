import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import article from '@/redux/slices/article';
import auth from '@/redux/slices/auth';

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    article,
    auth,
  });

export default reducers;
