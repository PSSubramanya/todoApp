import React from 'react';
import LandingPage from '../screens/LandingPage/LandingPage';
import TaskDisplay from '../screens/TaskDisplay/TaskDisplay';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigation';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="LandingPage">
        <Tab.Screen name="LandingPage" component={StackNavigator} />
        <Tab.Screen name="TaskDisplay" component={TaskDisplay} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;
