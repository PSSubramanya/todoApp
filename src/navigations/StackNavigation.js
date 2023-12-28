import React from 'react';
import LandingPage from '../screens/LandingPage/LandingPage';
import TaskDisplay from '../screens/TaskDisplay/TaskDisplay';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="TaskDisplay" component={TaskDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
