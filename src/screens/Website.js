import * as React from 'react';
import {  StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';

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
