import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreens';

const Stack = createNativeStackNavigator();

export const MainStack = (): JSX.Element => (
  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    {/* Tambahkan screen lain sesuai kebutuhan */}
  </Stack.Navigator>
);
