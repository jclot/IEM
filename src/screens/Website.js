import * as React from 'react';
import {  StyleSheet, Button, View, TouchableOpacity} from 'react-native';

import { WebView } from 'react-native-webview';
import Ionicons from '../../node_modules/@expo/vector-icons/Ionicons.js';

function HomeScreen({ navigation }) {

  let WebViewRef;

  return (
<>
    <WebView
        ref={WEBVIEW_REF => (WebViewRef = WEBVIEW_REF)}
        source={{ uri: 'http://www.iem.ed.cr/' }}
        scrollEnabled
        startInLoadingState={true}

      />
  <View style={styles.icons}>
      
      <TouchableOpacity onPress={() => { WebViewRef && WebViewRef.reload(); }} style={styles.icons_reload}>
      <Ionicons name="ios-refresh" size={26} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { WebViewRef && WebViewRef.goBack(); }} style={styles.icons_back}>
      <Ionicons name="ios-arrow-back" size={26} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { WebViewRef && WebViewRef.goForward(); }} style={styles.icons_forward}>
      <Ionicons name="ios-arrow-forward" size={26} color="black" />
      </TouchableOpacity>
 
 </View>

 </> 

  );
}
const styles = StyleSheet.create({

icons_reload: {

  alignSelf: 'flex-start',
  marginRight: 300
  
  


},

icons_back: {

  alignSelf: 'flex-end',
  paddingRight: 30,


},

icons_forward: {

  alignSelf: 'flex-end',
 
},

icons: {

  paddingLeft: 10,
 
  margin: 10,
  flexDirection: 'row',
  


}



})


export default HomeScreen;
