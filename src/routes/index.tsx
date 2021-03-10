import React from 'react';

import {AuthRoutes} from './auth.routes';
import {AppRoutes} from './app.routes';

import {useAuth} from '../hooks';

const Routes: React.FC = () => {
  const {signed} = useAuth();

  return !signed ? <AuthRoutes /> : <AppRoutes />;
};

export {Routes};
