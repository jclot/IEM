import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Anchor from './Anchor.js';

function PrivacyPolicy() {

    return (

<View> 
  <View> 
    <Anchor href="https://jsparling.github.io/hashmarks/privacy"> 
      Privacy Policy 
    </Anchor> 
  </View> 
  <View> 
    <Anchor href="https://jsparling.github.io/hashmarks/terms_and_conditions"> 
      Terms and Conditions 
    </Anchor> 
  </View> 
</View>

    );
}

export default PrivacyPolicy;