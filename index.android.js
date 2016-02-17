/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  NativeModules,
  View
} from 'react-native';
import UserLogin from './app/screens/user-login';
import MemberInfo from './app/screens/member-info';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

class grannysuggestions extends Component {
  constructor(props) {
    super(props);

    this.state= {
      isAuthenticated:false,
      fbdata:{}
    }
  }
  
  render() {
    if(!this.state.isAuthenticated) {
      return <UserLogin afterLogin={data => this.setState({isAuthenticated:true,fbdata:data})} />
    }

    return (
        <MemberInfo fbdata ={this.state.fbdata} afterLogout={data => this.setState({isAuthenticated:false,fbdata:{}})}/>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  }
});

AppRegistry.registerComponent('grannysuggestions', () => grannysuggestions);
