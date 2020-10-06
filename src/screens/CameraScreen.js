import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import Ionicons from '../../node_modules/@expo/vector-icons/Ionicons.js';
;


export default function CameraScreen() {


  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);


useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

if (hasPermission === null) {
    return <View />;
  }

if (hasPermission === false) {

    return (
 
      <TouchableOpacity onPress={() => alert("You don't have access to this camera.")}>
      <Text style={{ 
        color: '#CECECE',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 440,
        margin: 17,
        paddingBottom: 30}}>You don't have access to this camera please go to settings and allow it. </Text> 
      </TouchableOpacity>
    )
  }

  detectFaces = async imageUri => {
    const options = { mode: FaceDetector.Constants.Mode.fast };
    return await FaceDetector.detectFacesAsync(imageUri, options);
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera 

        style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref) 
 }}>

        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end'
          }}>


          <TouchableOpacity
            style={{
              
              alignSelf: 'center',
              paddingLeft: 160
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            
            <Ionicons name="ios-reverse-camera" size={45} color="salmon" />
          </TouchableOpacity>


          <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
            if(cameraRef){
              var photo = await cameraRef.takePictureAsync();
              console.log('photo', photo);
            }
          }}>
            <View style={{ 
               borderWidth: 2.5,
               borderRadius:"50%",
               borderColor: 'white',
               height: 50,
               width:  50,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               marginBottom: 100,
               color: 'salmon'}}
            >
              <View style={{
                 borderWidth: 2,
                 borderRadius:"100%",
                 borderColor: 'white',
                 height: 40,
                 width:40,
                 backgroundColor: 'salmon',}} >
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}