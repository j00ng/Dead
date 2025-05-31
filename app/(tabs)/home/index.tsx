import React, { Fragment, useState } from 'react';
import { StyleSheet, TextInput,View,Text } from 'react-native';



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

export default function HomeScreen (){
const [searchText,setSearchText] = useState('');
    return (
    <Fragment>
    <TextInput placeholder='주소를 입력해주세요' value={searchText} onChangeText={text => setSearchText(text)}  ></TextInput>
    <View><Text>${searchText}에 가시려는군요</Text></View>
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