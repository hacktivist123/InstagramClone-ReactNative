import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Dimensions from 'Dimensions';

class CellUserDataBar extends Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <View style={[viewStyles.container, this.props.supplementaryContainerStyle]}>
        <Image source={{uri: this.props.imageURL}} style={viewStyles.profilePicture} resizeMode={'cover'} />
        <Text style={textStyles.username}>{this.props.username}</Text>
        <Text style={textStyles.dotDotDot}>...</Text>
      </View>
    );

  }


}

const viewStyles = {

  container: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderColor: 'lightgray',
    shadowOffset: {height: 0.2, width: 0},
    shadowOpacity: 0.2,
    borderTopWidth: 0.5
  },
  profilePicture: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10
  }

};

const textStyles = {
  username: {
    fontWeight: '500',
    backgroundColor: 'transparent',
    fontSize: 13
  },
  dotDotDot: {
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: 'transparent',
    marginLeft: '68%',
    marginBottom: '2%'
  }
};

export { CellUserDataBar };
