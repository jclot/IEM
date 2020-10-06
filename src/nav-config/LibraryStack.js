import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LibraryScreen from '../screens/LibraryScreen';




const Stack = createStackNavigator();

function LibraryStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Library" 
      component={LibraryScreen} 
      options={{
        headerTintColor: 'salmon',
        headerTitle: 'Library',
      
      }}
      />
    </Stack.Navigator>
  );
}

export default LibraryStackScreen;