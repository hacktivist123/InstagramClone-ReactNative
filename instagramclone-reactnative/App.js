//Author = Akintayo shedrack
//Title = Instagram Clone With React native
//Time = 9:30am, Nov 20, 2017

//where we do all our Importing!!!!!
import React, {Component} from 'react';
import { Text, View, ImageBackground, StatusBar, ScrollView, Image, Linking, WebView} from 'react-native';
import LoginButton from './src/components/LoginButton';
import Dimensions from 'Dimensions';
import TapableText from  './src/components/TapableText';
import InstaNavigationBar from './src/components/InstaNavigationBar';
import NetworkManager from './src/models/NetworkManager'


//Independent Constants
const windowSize = Dimensions.get('window');
const standardComponentWidth = windowSize.width*0.82;
const twitterIconSize = 19;

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
    console.log('Current URL = ' + webViewState.url)

    if(webViewState.url.includes(accessTokenSubString)){
      //safegaurd conditional if statement
      if(this.state.accessToken.length < 1){
        //the index of the begining of the accessToken
        var startIndexOfAccessToken = webViewState.url.lastIndexOf(accessTokenSubString) + accessTokenSubString.length;
        var foundAccessToken = webViewState.substr(startIndexOfAccessToken);
        console.log("My Access Token = " + foundAccessToken);


        //make a network call to get the user Details

        this.apiManager= new NetworkManager(foundAccessToken);

        this.setState({accessToken: foundAccessToken});
      }
    }
  }
  authenticationWebViewComponent = () => {
    return(
      <WebView source={{ uri: this.state.authenticationURL}}
      startInLoadingState={true}
      onNavigationStateChange={this.onURLStateChange}/>
    );

  }

  loginWithTwitter = () => {
    return (
      <View style= {viewStyles.twitterLoginViewStyle}>
      <Image
      source={require('./src/images/icons/twitter_bird.png')}
      style ={viewStyles.twitterIconViewStyle}
      resizeMode = 'contain'/>
      </View>
    );
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
  instagramFeedScreenComponent = () => {
    return(
      <View style = {{ flex:1,}}>
        <InstaNavigationBar/>
      </View>
    );
  }
  loginWithTwitter = () => {
    return (
      <View style= {viewStyles.twitterLoginViewStyle}>
      <Image
      source={require('./src/images/icons/twitter_bird.png')}
      style ={viewStyles.twitterIconViewStyle}
      resizeMode = 'contain'/>
      </View>
    );
  }
  signUpFootercomponent=() => {
    return(
      <View style= {[viewStyles.signUpFootercomponent]}>
      <Text style={textStyles.forgottenLogin}>Dont Have An Account?</Text>
      <TapableText
      textStyle={[textStyles.forgottenLogin, textStyles.forgottenLoginBold]}
      //this should create a link behind the SignUp in text using Linkin and openURL
      textTapped={ () => Linking.openURL(urls.instagramSignUp) }
      >
      Sign Up
      </TapableText>
      </View>
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

      <View style = {viewStyles.orSeperatorView}>
      <View style = { viewStyles.orSeperatorLine}/>
      <Text style = {textStyles.orSeperatorTextStyle}>OR</Text>
      <TapableText
      textStyle={[textStyles.forgottenLogin, textStyles.forgottenLoginBold, textStyles.twitterTextSize]}
      //this should create a link behind the login with twitter in text using Linkin and openURL
      textTapped={ () => Linking.openURL(urls.twitterLogin) }
      >
      Login with Twitter
      </TapableText>
      <View style = {viewStyles.orSeperatorLine}/>
      </View>

      {this.loginWithTwitter()}

      </ScrollView>
      {this.signUpFootercomponent}
      </ImageBackground>

    );instagramFeed

  }
  render() {

    var hasSucessfullyLoggedIn = (this.state.accessToken.length > 1);
    var shouldDisplayLoginScreen = (this.state.displayAuthenticationWebView == false && this.state.accessToken.length < 1);

    if(shouldDisplayLoginScreen){
      return(
        this.loginScreenComponent
      );
    }

    else if (hasSucessfullyLoggedIn ){
      return(
        <View style = {{ flex:1, alignItems: 'center', justifyContent : 'center'}}>
        <Text>Congratulations Oti Wole Instagram with accessToken:</Text>
        <Text>{this.state.accessToken}</Text>
        </View>
      );
    }

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
    const viewStyles = {
      container: {
        flex: 1,
        alignItems: 'center',
      },
      instagramTextLogo: {
        width: 150,
        height: 80,
        marginTop: '35%',
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
        marginVertical: 14,
        paddingHorizontal: 5
      },
      orSeperatorLine: {
        backgroundColor: colors.instagramButtonBorderColor,
        borderColor: colors.instagramButtonBorderColor,
        height: 1,
        flex: 5,
        borderWidth: 0.5
      },
      twitterLoginViewStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      twitterIconViewStyle:{
        width: twitterIconSize,
        height: twitterIconSize,
        MarginHorizontal: 14
      },
      signUpFootercomponent:{
        flex: 0.3,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 255, 0.15)',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1.5},
        height: null,
        width: windowSize.width
      },
    };

    const viewStyles = {
      container: {
        flex: 1,
        alignItems: 'center',
      },
      instagramTextLogo: {
        width: 150,
        height: 80,
        marginTop: '35%',
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
        marginVertical: 14,
        paddingHorizontal: 5
      },
      orSeperatorLine: {
        backgroundColor: colors.instagramButtonBorderColor,
        borderColor: colors.instagramButtonBorderColor,
        height: 1,
        flex: 5,
        borderWidth: 0.5
      },
      twitterLoginViewStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      twitterIconViewStyle:{
        width: twitterIconSize,
        height: twitterIconSize,
        MarginHorizontal: 14
      },
      signUpFootercomponent:{
        flex: 0.3,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 255, 0.15)',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1.5},
        height: null,
        width: windowSize.width
      },
    };
