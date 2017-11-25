import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import { CellUserDataBar } from './';

class InstaFeedCell extends Component {

  constructor(props){
    super(props);
    this.cellData = props.cellData;
    console.log(this.cellData);
  }

  render(){

    /*
    <CellUserDataBar
      username={this.props.cellData.user.username}
      imageURL={this.props.cellData.user.profile_picture}
      supplementaryContainerStyle={{marginBottom: 15}}
    />
    */

    return (
      <View style={{flex: 0, width: '100%'}}>
        <CellUserDataBar
          username={this.props.cellData.user.username}
          imageURL={this.props.cellData.user.profile_picture}
        />

      </View>
    );

  }


}

export { InstaFeedCell };
