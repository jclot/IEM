import * as React from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { block } from 'react-native-reanimated';


function HomeScreen({ navigation }) {
  return (

<ScrollView>

    <TouchableOpacity onPress={() => navigation.navigate('Library')}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.HomeText}>To start viewing your photos here, start by taking a picture of yourself and editing it in library.</Text>
    </View>
    </TouchableOpacity>
    <View>
    <TouchableOpacity 
        onPress={() => navigation.navigate('Camera')}
    >
    <Text style={styles.ButtonCamera}>Go to Camera</Text>
    </TouchableOpacity>
    </View>
</ScrollView>

  );
}
const styles = StyleSheet.create({

    HomeText: {

        color: '#CECECE',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 350,
        paddingBottom: 30
    },
    ButtonCamera: {

        fontSize: 13,
        color: "#007AFF",
        textAlign: "center"

    },
 

})

const Separator = () => (

<View style={styles.Separator} />

);


export default HomeScreen;
