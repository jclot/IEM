import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CameraScreen from '../screens/Facebook.js';


const Stack = createStackNavigator();

function CameraStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Camera" 
      component={CameraScreen} 
      options={{

        headerTintColor: 'black',
        headerTitle: 'IEM Bilingual School (Facebook)'
      
      }}
      />
    </Stack.Navigator>
  );
}

export default CameraStackScreen;