import * as React from 'react';
import {  StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';

function CameraScreen({ navigation }) {
  return (

<WebView
        source={{ uri: 'https://es-la.facebook.com/IEM.Bilingual.School/' }}
        scrollEnabled
        startInLoadingState={true}
        cacheEnabled={true}
        sharedCookiesEnabled
      />

  );
}
const styles = StyleSheet.create({



})


export default CameraScreen;
