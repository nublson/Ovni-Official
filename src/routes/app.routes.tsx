import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Application} from '../views/App';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <AppStack.Screen name="Application" component={Application} />
    </AppStack.Navigator>
  );
};

export {AppRoutes};
