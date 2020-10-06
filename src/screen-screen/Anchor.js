import React from 'react';
import {Text} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const handlePress = (href) => {
    WebBrowser.openBrowserAsync(href);
  }
  
  const Anchor = (props) => (
    <Text {...props} style={{color: '#1559b7'}} onPress={() => handlePress(props.href)}>
      {props.children}
    </Text>
  )
  
  export default Anchor