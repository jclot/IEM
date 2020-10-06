import * as React from 'react';
import {  StyleSheet} from 'react-native';

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