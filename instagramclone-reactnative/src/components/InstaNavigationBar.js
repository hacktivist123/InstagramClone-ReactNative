import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Constants } from 'expo';
import Dimensions from 'Dimensions';

const navBarHeight = 70;
const iconSize = navBarHeight/3;
const window = Dimensions.get('window');

class InstaNavigationBar extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={viewStyles.container}>

        <Image
          resizeMode={'cover'}
          source={require('../images/icons/camera.png')}
          style={[viewStyles.genericIcon, { width: iconSize * 1.22, height: iconSize * 1.22 }]}
        />


        <Image
          resizeMode={'cover'}
          source={require('../images/instagram-logo-black.png')}
          style={viewStyles.instagramHeaderLogo}
        />


        <Image
          resizeMode={'cover'}
          source={require('../images/icons/paper-plane.png')}
          style={viewStyles.genericIcon}
        />

      </View>
    );
  }

}

const viewStyles = {

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: window.width,
    height: navBarHeight,
    borderBottomWidth: 1,
    borderColor: 'rgb(220, 220, 220)',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingHorizontal: 12
  },
  genericIcon: {
    width: iconSize,
    height: iconSize,
    backgroundColor: 'transparent'
  },
  instagramHeaderLogo: {
    width: 120,
    height:45,
    backgroundColor: 'transparent'
  }

}

export  default InstaNavigationBar
