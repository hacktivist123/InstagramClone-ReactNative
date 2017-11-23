import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
  }


loginScreenComponent = () =>{
  return (
    <view>
      <Image source={require('./src/images/ibiza Sunset.jpg')}
       resizeMode={'cover'}
       style={viewstyles.container}
       />
       <Image Source={require('./src/images/instagram-text-black.png')}
        resizeMode={'cover'}
        style={viewstyles.instagramLogoStyle}/>
        </view>
  );
};
  render() {
    return (
      this.loginScreenComponent()
    );
  }
}

const viewstyles ={
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

  const textstyles = {
    container{
      flex: 1,
      alignItems:'center'
      justifyContent:'center'
    }

  };
