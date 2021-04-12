import { combineEpics } from 'redux-observable';

import * as auth from '@/redux/slices/auth';
import { getEpicsFromSlices } from './utils';

export default combineEpics(...getEpicsFromSlices([auth]));
