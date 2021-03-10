import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Authentication} from '../views/Auth';
import {SignIn} from '../views/Auth/SignIn';
import {SignUp} from '../views/Auth/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle="dark-content" />
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}>
        <AuthStack.Screen name="Authentication" component={Authentication} />
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};

export {AuthRoutes};
