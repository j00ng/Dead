import React, { Fragment } from 'react';
import { TextInput, View,Text,StyleSheet } from 'react-native';



const markers = [
    {
      id: 1,
      title: 'Dead Bunker',
      description: 'Old military site',
      latitude: 37.5665,
      longitude: 126.9780,
    },
    {
      id: 2,
      title: 'Old Factory',
      description: 'Abandoned chemical plant',
      latitude: 37.5715,
      longitude: 126.9760,
    },
  ];

export default function (){
    return (
    <Fragment>
    <View><Text style = {styles.title}>폐가 spot</Text></View>
    <TextInput></TextInput>
    </Fragment>
    )
}
const styles = StyleSheet.create({
    container: {
      padding: 16,
      marginTop: 50,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    input: {
      marginTop: 12,
      padding: 10,
      borderWidth: 1,
      borderRadius: 6,
    },
  });