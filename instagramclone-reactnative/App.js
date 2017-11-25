//Created by Akintayo shedrack
//With React native
// started ; Nov 20

import React, {Component} from 'react';
import { Text, View, ImageBackground, StatusBar, ScrollView, Image, Linking, WebView} from 'react-native';
import LoginButton from './src/components/LoginButton';
import Dimensions from 'Dimensions';
import TapableText from  './src/components/TapableText';

const windowSize = Dimensions.get('window');
const standardComponentWidth = windowSize.width*0.82;

const colors = {
  facebook: 'rgb(59, 89, 152)',
  text: 'rgba(255, 255, 255, 0.75)',
  instagramButtonBorderColor: 'rgba(255, 255, 255, 0.35)',
  facebookButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
}

const loginButtonInfo = {
  height: 45,
  pageFontSize: 14,
  borderWidth: 0.8,
  borderRadius: 5
}

const urls = {
  forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset',
  twitterLogin: 'https://twitter.com/login?lang=en',
  instagramSignUp: 'https://www.instagram.com/accounts/emailsignup/?hl=en',
  instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=d86c7691bb3a41f9a6f24c21276a04ba&redirect_uri=https://hacktivist123.github.io/Akintayoshedrack.me&response_type=token&scope=basic+follower_list+comments+likes',
  instagramLogout: 'https://instagram.com/accounts/logout',
  instagramBase: 'https://www.instagram.com/',
};


export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      authenticationURL:urls.instagramAuthLogin,
      accessToken: '',
      isUserLoggedIn: false,
      displayAuthenticationWebView: false,
    }
  }

  loginButtonPressed = () => {
    this.setState({ displayAuthenticationWebView: true});
  }

  onURLStateChange = (webViewState) => {
    const accessTokenSubString = 'access_token='
    console.log('Current URL = ' + webViewState.url);
  }

authenticationWebViewComponent = () => {
  return(
    <WebView source={{ uri: this.state.authenticationURL}}
     startInLoadingState={true}
     onNavigationStateChange={this.onURLStateChange}/>
  );

}

  loginScreenComponent = () => {
    return (
      <ImageBackground
      source={require('./src/images/ibiza-sunset')}
      resizeMode={'cover'} style={viewStyles.container}
      >
      <StatusBar
      backgroundColor="gray"
      barStyle="light-content"
      />

      <ScrollView>

      <Image
      source={require('./src/images/instagram-text-black.png')}
      style={viewStyles.instagramTextLogo}
      resizeMode={'contain'}
      />
      <LoginButton
      buttonViewStyle={viewStyles.instagramLoginButtonView}
      buttonTextStyle={{color: colors.text, fontWeight: '500'}}
      buttonTapped={this.loginButtonPressed}
      touchableHighlightStyle={viewStyles.instagramButtonTouchabeHighlightStyle}
      activeOpacity={0.75}

      >
      Log In (Via Instagram)
      </LoginButton>

      <LoginButton
      buttonViewStyle={[viewStyles.instagramLoginButtonView, viewStyles.facebookLoginButton]}
      buttonTextStyle={{color: colors.text, fontWeight: '500'}}
      buttonTapped={this.loginButtonPressed}
      touchableHighlightStyle={[viewStyles.instagramButtonTouchabeHighlightStyle, viewStyles.facebookButtonTouchableHighlightStyle]}
      activeOpacity={0.75}>
      Facebook login
      </LoginButton>

      <View style = {viewStyles.forgottenLoginEncapsulationView}>
      <Text style={textStyles.forgottenLogin}>Forgot Your Login Details?</Text>
      <TapableText
      textStyle={[textStyles.forgottenLogin, textStyles.forgottenLoginBold]}
      //this should create a link behind the Get Help signing in text using Linkin and openURL
      textTapped={ () => Linking.openURL(urls.forgotInstagramLogin) }
      >
      Get Help signing in
      </TapableText>
      </View>

      <view style = {viewStyles.orSeperatorView}>
      <view style = { viewStyles.orSeperatorLine}/>
      <Text style = {textStyles.orSeperatorTextStyle}>OR</Text>

      </view>

      </ScrollView>

      </ImageBackground>

    );

  }
  render() {
    if (this.state.displayAuthenticationWebView == true){
      return(
        this.authenticationWebViewComponent()
      );
    }
    else {
      return(
        this.loginScreenComponent()
      );
    }
  }


  const viewStyles = {
    container: {
      flex: 1,
      alignItems: 'center',
    },
    instagramTextLogo: {
      width: 150,
      height: 80,
      marginTop: '65%',
      marginBottom: 25,
      alignSelf : 'center'
    },
    instagramLoginButtonView: {
      backgroundColor: 'transparent',
      borderColor: colors.instagramButtonBorderColor,
      borderWidth: loginButtonInfo.borderWidth,
      borderRadius: loginButtonInfo.borderRadius,
      width: standardComponentWidth,
      height: loginButtonInfo.height,
      justifyContent: 'center',
      alignItems: 'center'
    },
    instagramButtonTouchableHighlightstyle: {
      backgroundColor: 'transparent',
      width: standardComponentWidth,
      height: loginButtonInfo.height,
      marginTop: 5
    },
    facebookLoginButton: {
      backgroundColor: colors.facebook,
    },
    facebookButtonTouchableHighlightStyle: {
      marginTop: 20,
      marginBottom: 5
    },
    forgottenLoginEncapsulationView: {
      flexDirection: 'row',
      flex: 1,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    orSeperatorView: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 13,
      paddingHorizontal: 5
    },
    orSeperatorLine: {
      backgroundColor: colors.instagramButtonBorderColor,
      borderColor: colors.instagramButtonBorderColor,
      height: 1,
      flex: 5,
      borderWidth: 0.5
    },
  };
  const textStyles = {
    forgottenLogin: {
      color : 'white',
      fontSize: loginButtonInfo.pageFontSize,
      backgroundColor: 'transparent'
    },
    forgottenLoginBold: {
      fontWeight: 'bold',
      marginLeft: 3
    },
    orSeperatorTextStyle: {
      color: 'white',
      backgroundColor: 'transparent',
      fontWeight: 'bold'
    },
  };
