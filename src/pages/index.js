// Add the Firebase products that you want to use
import 'firebase/auth';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
import isEmpty from 'lodash/isEmpty';

import Loading from '@/components/Loading';
import config from '@/config';
import AppFrame from '@/containers/AppFrame';
import { initUser } from '@/redux/slices/auth';

const HomeRouter = lazy(() => import('./home'));

const Switcher = () => {
  const dispatch = useDispatch();

  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // initialize firebase app
    if (isEmpty(firebase.apps)) {
      firebase.initializeApp(config.firebase);
    }
    firebase.auth().onAuthStateChanged(user => {
      setAuthChecked(true);
      dispatch(initUser({ user }));
    });
  }, []);

  return (
    authChecked && (
      <Suspense fallback={<Loading />}>
        <AppFrame>
          <Switch>
            <Route path="/" component={HomeRouter} />
          </Switch>
        </AppFrame>
      </Suspense>
    )
  );
};

export default Switcher;
