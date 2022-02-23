import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Details from './src/Components/Details/Details';
import Home from './src/Screens/Home/Home';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  const screenOptions = {
    headerShown: true,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
