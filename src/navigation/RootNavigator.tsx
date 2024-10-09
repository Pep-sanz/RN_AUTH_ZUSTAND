import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthStore} from '../stores/useAuthStore';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStack} from './MainStack';
import {AuthStack} from './AuthStack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {token} = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Auth">
        {token ? (
          <Stack.Screen name="Main" component={MainStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
