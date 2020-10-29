import * as React from 'react';
import {  StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from '../../node_modules/@expo/vector-icons/Ionicons.js';

function HowtouseScreen({ navigation }) {

    let WebViewRef;

  return (

<ScrollView>
    <View style={styles.Title_Background}>
        <Text style={styles.Title}>What is this app?</Text>
    </View>
    <View style={styles.Title_Background}>
        <Text style={styles.Text}>This application is mainly dedicated to the Instituto Educativo Moderno (I.E.M) to facilitate the handling of the applications or websites that we use on a daily basis.</Text>
    </View>
    <View style={styles.Title_Background}>
        <Text style={styles.Title}>How this app works?</Text>
    </View>
    <View style={styles.Title_Background}>
        <Text style={styles.Text}>This application is easy to use, when you enter the application you will find the main page the IEM, in the following tabs you will find the other web pages.</Text>
    </View>
    <View style={styles.Title_Background}>
        <Text style={styles.Title}>Common Errors</Text>
    </View>
    <View style={styles.Title_Background}>
        <Text style={styles.Text}>1. The page may be on hold for quite some time and that is due to the internet connection, or the amount of data that the page consumes.
        {"\n"}
        {"\n"}
        If you find another problem in the application please report it.    </Text>
    </View>
</ScrollView>

  );
}
const styles = StyleSheet.create({

    Title: {

        fontSize: 25,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
        fontWeight: "600",
    },

    Title_Background: {

        backgroundColor: 'white',
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 10,
        textAlign: 'center',
    },

    Text: {

        fontSize: 15,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
        fontWeight: "400",
        marginLeft: 10,
        marginRight: 10,

    }



})


export default HowtouseScreen;
