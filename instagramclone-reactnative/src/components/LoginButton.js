import React, {Component} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';


class LoginButton extends Component {

  constructor(props){
    super(props);
  }

  render(){

    return(
      <TouchableHighlight
      underlayColor={'transparent'}
      activeOpacity={this.props.activeOpacity}
      style={[this.props.touchableHighlightStyle, viewStyles.supplementaryHighlightStyle]}
      onPress={this.props.buttonTapped}
      >
      <View style={this.props.buttonViewStyle}>

      <Text style={this.props.buttonTextStyle}>{this.props.children}</Text>

      </View>

      </TouchableHighlight>
    );

  }


}

const viewStyles = {

  supplementaryHighlightStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

};

export default LoginButton;
