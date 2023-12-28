import React from 'react';
import LandingPage from '../screens/LandingPage/LandingPage';
import TaskDisplay from '../screens/TaskDisplay/TaskDisplay';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigation';
import BottomNavigator from './BottomBarNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LandingPage">
        <Drawer.Screen name="LandingPage" component={BottomNavigator} />
        <Drawer.Screen name="TaskDisplay" component={TaskDisplay} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
