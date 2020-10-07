import * as React from 'react';
import {  StyleSheet} from 'react-native';
import Ionicons from '../../node_modules/@expo/vector-icons/Ionicons.js';
import { WebView } from 'react-native-webview';

function LibraryScreen({ navigation }) {
  return (

<WebView
        source={{ uri: 'https://www.wootit.cr/iem/' }}
        scrollEnabled
        startInLoadingState={true}
        cacheEnabled={true}
        
      />

  );
}
const styles = StyleSheet.create({



})


export default LibraryScreen;