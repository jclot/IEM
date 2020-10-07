import * as React from 'react';
import {  StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';
import Ionicons from '../../node_modules/@expo/vector-icons/Ionicons.js';
function HomeScreen({ navigation }) {
  return (

<WebView
        source={{ uri: 'http://www.iem.ed.cr/' }}
        scrollEnabled
        startInLoadingState={true}
       
        
      />

  );
}
const styles = StyleSheet.create({



})


export default HomeScreen;
