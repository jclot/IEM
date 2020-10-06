import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/SettingsScreen.js';
import PrivacyPolicy from '../screen-screen/PrivacyContent.js';


const Stack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Settings" 
      component={SettingsScreen} 
      options={{
        headerTintColor: 'salmon',
        headerTitle: 'Settings',
      
      }}
      />
      <Stack.Screen 
      name="PrivacyPolicy" 
      component={PrivacyPolicy} 
      options={{
        headerTintColor: 'salmon',
        headerTitle: 'Privacy Policy',
      
      }}
      />
    </Stack.Navigator>
  );
}

export default SettingsStackScreen;