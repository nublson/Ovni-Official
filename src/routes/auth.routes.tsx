import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Authentication} from '../views/Auth';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <AuthStack.Screen name="Authentication" component={Authentication} />
    </AuthStack.Navigator>
  );
};

export {AuthRoutes};
