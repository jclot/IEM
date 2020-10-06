import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";

import CameraScreen from '../screens/CameraScreen.js';
import HomeStackScreen from './HomeStack.js';
import LibraryStackScreen from './LibraryStack.js';
import SettingsStackScreen from './SettingsStack.js';

import Ionicons from '../../node_modules/@expo/vector-icons/Ionicons.js';



const Tab = createBottomTabNavigator();


function Route() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused 
                ? 'ios-list-box' 
                : 'ios-list';
            } else if (route.name === 'Camera') {
              iconName = focused 
                ? 'ios-camera' 
                : 'ios-camera';
            } else if (route.name === 'Library') {
              iconName = focused 
                ? 'ios-albums' 
                : 'ios-albums';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
        name="Home" 
        component={HomeStackScreen} 

        />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Library" component={LibraryStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  
  
  );
}

export default Route;