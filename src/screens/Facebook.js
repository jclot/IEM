import * as React from 'react';
import {  StyleSheet, View, TouchableOpacity, Linking} from 'react-native';
import Ionicons from '../../node_modules/@expo/vector-icons/Ionicons.js';
import FontAwesome from '../../node_modules/@expo/vector-icons/FontAwesome.js';
import { WebView } from 'react-native-webview';

function CameraScreen({ navigation }) {

  let WebViewRef;

  return (

<>
    <WebView
        ref={WEBVIEW_REF => (WebViewRef = WEBVIEW_REF)}
        source={{ uri: 'https://www.facebook.com/IEM.Bilingual.School/' }}
        scrollEnabled
        startInLoadingState={true}
        sharedCookiesEnabled={true}
        cacheEnabled={true}
        thirdPartyCookiesEnabled={true}

      />
  <View style={styles.icons}>
      
      <TouchableOpacity onPress={() => { WebViewRef && WebViewRef.reload(); }} style={styles.icons_reload}>
      <Ionicons name="ios-refresh" size={26} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icons_safari} onPress={() => Linking.openURL('https://www.facebook.com/IEM.Bilingual.School/')}>
      <FontAwesome name="safari" size={26} color="black" />
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
    
    
    
  
  
  },
  
  icons_back: {
  
    alignSelf: 'flex-end',
    paddingRight: 30,
    marginLeft: 130
  
  
  
  },
  
  icons_forward: {
  
    alignSelf: 'flex-end',
   
  },
  
  icons: {
  
    paddingLeft: 10,
    
    margin: 10,
    flexDirection: 'row',
    
  
  
  },

  icons_safari: {

   marginLeft: 150
    

  },

  



})


export default CameraScreen;
