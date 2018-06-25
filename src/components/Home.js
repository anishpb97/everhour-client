import React, { Component } from 'react';
import {Actions} from "react-native-router-flux";
import { AsyncStorage } from "react-native";
import axios from "axios";
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';
import * as API_END_POINTS from "../constants/api.js";

export default class Login extends Component {
  
    constructor(props) {
        super(props);

    }
    componentWillMount(){
        AsyncStorage.removeItem('API_KEY', this.key, () => {
            Actions["Login"]();
        });
    }
    render(){
        return(
                <View>

                </View> 
        )
    }
}