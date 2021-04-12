import { combineEpics } from 'redux-observable';

import * as article from '@/redux/slices/article';
import * as auth from '@/redux/slices/auth';
import { getEpicsFromSlices } from './utils';

export default combineEpics(...getEpicsFromSlices([article, auth]));
