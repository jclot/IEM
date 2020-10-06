import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HowtouseScreen from '../screens/Howtouse.js';


const Stack = createStackNavigator();

function howtouseStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="How to use" 
      component={HowtouseScreen} 
      options={{

        headerTintColor: 'black',
        headerTitle: 'How to use this app?'
      
      }}
      />
    </Stack.Navigator>
  );
}

export default howtouseStack;