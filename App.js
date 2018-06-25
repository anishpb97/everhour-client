
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {Scene, Router} from "react-native-router-flux";
import Login from './src/components/Login';
import Home from './src/components/Home';


GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
GLOBAL.FormData = GLOBAL.originalFormData ? GLOBAL.originalFormData : GLOBAL.FormData;
console.disableYellowBox = true;


export default class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene
          key="Login"
          hideNavBar={true}
          component={Login}
          title="Login"
          initial={true}/>
        <Scene
          key="Home"
          hideNavBar={true}
          component={Home}
          title="EverHour Client"
          />
</Scene>   
      </Router> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
