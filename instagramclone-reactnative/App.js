import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StatusBar, ScrollView} from 'react-native';
import LoginButton from './src/components/LoginButton'

export default class App extends Component {

  constructor(props){
    super(props);
  }


  loginScreenComponent = () =>{
    return (
      <ImageBackground source={require('./src/images/Ibiza-Sunset.jpg')}
      resizeMode={'cover'}
      style={viewstyles.container}
      >
      <StatusBar
      backgroundColor="blue"/>

      <Image
      Source={require('./src/images/instagram-text-black.png')}
      resizeMode={'cover'}
      style={viewstyles.instagramTextLogo}/>

      <ScrollView>
      <Image
      Source={require('./src/images/instagram-text-black.png')}
      resizeMode={'cover'}
      style={viewstyles.instagramTextLogo}/>

      </ScrollView>

      <ImageBackground>
    )
  };


  render() {
    return (
      this.loginScreenComponent()
    );
  }

  const viewstyles ={
    container: {
      flex: 1,
      alignItems: 'center',
    },
    instagramTextLogo: {
      flex: 0,
      width: 150,
      height: 80,
      marginTop: '65%',
      marginBottom: 25
    };
    instagramLoginButtonView: {

    }

    const textstyles = {


    };
