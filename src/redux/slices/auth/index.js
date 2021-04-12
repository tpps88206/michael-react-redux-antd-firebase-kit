import firebase from 'firebase';
import get from 'lodash/get';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: {},
  user: {},
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initUser: (state, action) => {
      state.user = get(action, 'payload.user', {});
    },
    signInWith3thParty: (state, action) => {
      state.isLoading = true;
      state.error = {};
    },
    signInWith3thPartyFulfilled: (state, action) => {
      state.isLoading = false;
      state.error = {};
    },
    signInWith3thPartyRejected: (state, action) => {
      state.isLoading = false;
      state.error = get(action, 'payload.error', {});
    },
    signOut: (state, action) => {
      state.isLoading = true;
      state.error = {};
    },
    signOutFulfilled: (state, action) => {
      state.isLoading = false;
      state.error = {};
    },
    signOutRejected: (state, action) => {
      state.isLoading = false;
      state.error = get(action, 'payload.error', {});
    },
  },
});

export const {
  initUser,
  signInWith3thParty,
  signInWith3thPartyFulfilled,
  signInWith3thPartyRejected,
  signOut,
  signOutFulfilled,
  signOutRejected,
} = slice.actions;

export default slice.reducer;

export const epics = {
  signInWith3thParty: (action$, state$, action) => {
    const { provider } = action.payload;
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => signInWith3thPartyFulfilled())
      .catch(error => signInWith3thPartyRejected({ type: action.type, error }));
  },
  signOut: (action$, state$, action) =>
    firebase
      .auth()
      .signOut()
      .then(() => signOutFulfilled())
      .catch(error => signOutRejected({ type: action.type, error })),
};
