import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen.js';


const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{

        headerTintColor: 'salmon',
        headerTitle: 'Home'
      
      }}
      />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;