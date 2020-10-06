import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Website.js';


const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{

        headerTintColor: 'black',
        headerTitle: 'IEM Bilingual School'
      
      }}
      />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;