import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import CameraStackScreen from './FacebookStack.js'
import HomeStackScreen from './WebsiteStack.js';
import LibraryStackScreen from './WootitStack.js';
import HowtouseStack from './HowtouseStack.js';

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
                : 'ios-information-circle';
            } else if (route.name === 'Facebook page') {
              iconName = focused 
                ? 'logo-facebook' 
                : 'logo-facebook';
            } else if (route.name === 'Woot it') {
              iconName = focused 
                ? 'ios-school' 
                : 'ios-school';
            } else if(route.name === 'How to use') {
              iconName = focused 
                ? 'ios-help-circle' 
                : 'ios-help-circle';
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
        <Tab.Screen name="Website" component={HomeStackScreen} options={{tabBarVisible: false}} />
        <Tab.Screen name="Facebook page" component={CameraStackScreen} options={{tabBarVisible: false}} />
        <Tab.Screen name="Woot it" component={LibraryStackScreen} options={{tabBarVisible: false}}/>
        {/* <Tab.Screen name="How to use" component={HowtouseStack} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  
  
  );
}

export default Route;