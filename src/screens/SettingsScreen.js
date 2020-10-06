import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Switch, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import CamaraScreen from '../screens/CameraScreen.js';
import PrivacyPolicy from '../screen-screen/PrivacyContent.js'


function SettingScreen({ navigation }) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


if (isEnabled === false) {

  

}

if (isEnabled === true) {

  

}

  return (

  <ScrollView>
    <View style={styles.container}>
    <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  </View>
  <TouchableOpacity
  onPress={() => navigation.navigate('PrivacyPolicy')}>
    <Text>Privacy Policy</Text>
  </TouchableOpacity>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SettingScreen;
