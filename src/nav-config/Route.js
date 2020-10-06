import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";

import CameraStackScreen from './FacebookStack.js'
import HomeStackScreen from './WebsiteStack.js';
import LibraryStackScreen from './WootitStack.js';

import Ionicons from '../../node_modules/@expo/vector-icons/Ionicons.js';



const Tab = createBottomTabNavigator();


function Route() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Website') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Facebook page') {
              iconName = focused 
                ? 'ios-camera' 
                : 'ios-camera';
            } else if (route.name === 'Woot it') {
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
        name="Website" 
        component={HomeStackScreen} 

        />
        <Tab.Screen name="Facebook page" component={CameraStackScreen} />
        <Tab.Screen name="Woot it" component={LibraryStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  
  
  );
}

export default Route;