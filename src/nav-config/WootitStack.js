import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '../../node_modules/@expo/vector-icons/Ionicons.js';
import LibraryScreen from '../screens/Wootit';

const Stack = createStackNavigator();

function LibraryStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Library" 
      component={LibraryScreen} 
      options={{
        headerTintColor: 'black',
        headerTitle: 'Woot it',
      
      }}
      
      />
      
    </Stack.Navigator>
  );
}

export default LibraryStackScreen;