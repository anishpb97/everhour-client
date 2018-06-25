import React, { Component } from 'react';
import {Actions} from "react-native-router-flux";
import { BarIndicator} from 'react-native-indicators';
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
        this.state = {
            loading: false,
        }
        this.handlePress = this.handlePress.bind(this)
    } 
    componentWillMount(){
       
        AsyncStorage.getItem("API_KEY").then((value) => {
            if(value){
                Actions["Home"]();
            }
           
        })
    }
    
    async handlePress(){
        this.setState({
            loading: true
          });
        try {
          let response = await axios.get(API_END_POINTS.MY_PROFILE,{
            headers: { 
                "X-Api-Key": this.key,
                "X-Accept-Version": "1.2",
            }
        })
        if(response){
           this.setState({
            loading: false
          });
          AsyncStorage.setItem('API_KEY', this.key, () => {
            Actions["Home"]();
        });
  
           
        } 
      }
      catch(err){ 
        alert("Invalid API Key")
        this.setState({
            loading: false
          });
       
      }
        
    }

    render(){
        return(
            <View style={styles.container}> 
             { 
             (this.state.loading) ?
            
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                    <BarIndicator
                        color="#24be6a"
                        count={5}
                        animating={this.state.loading} />
                    </View>
                </View>
               : 
             <View>  
               <View style={styles.logo}>
                  <Image source={require('./../assets/images/logo_everhour.png')}/>
                </View>  
              <View style={styles.form}>   
                  <TextInput autoCapitalize="none" 
                  autoCorrect={false} 
                  placeholder="Enter you API Key" 
                  style={styles.input}
                  onChangeText={(text) => this.key = text} 
                  />
                  
                  <TouchableOpacity
                  onPress={this.handlePress}
                  style={styles.primaryButton}
                  activeOpacity={0.7}
                  >
                     <Text style={styles.title}>Enter</Text>
                   </TouchableOpacity>   
              </View> 
            </View>   
            }
            </View>
        )
    }
}  

const styles = StyleSheet.create({
    logo:{
        marginTop:'25%',
        height: 40,
        alignItems:'center'
    },

    form:{
        marginTop:'35%', 
        alignItems:'center'
    },

    input:{
    margin:15,    
    borderRadius: 2,
    borderColor: '#e6e6e6',
    borderWidth:1,
    color: '#555459',
    textAlign:'center',
    paddingHorizontal: 10,
    height: 40,
    width: '85%',
    fontFamily:'Lato-Regular',
    fontSize:14,
    },

    container: {
        flex: 1,
        backgroundColor: '#FFF',
      },

      primaryButton:{
        margin:15,       
       backgroundColor:'#3aca7f',
       borderRadius:4,
       height: 50,
       shadowColor: "rgba(0, 0, 0, 0.39)",
       alignItems: "center",
       justifyContent: "center",
       shadowOffset: {
         width: 0,
         height: 0
       },
       elevation: 15,
       width: '85%',
      },

      title:{
        fontSize:20,
        fontWeight:"500",
        fontFamily:'Lato-Regular',
        color:'#FFF'
      },
      modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255,255,255,0.5)',
      },
      activityIndicatorWrapper: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderColor:'rgba(255,255,255,0.5)',

        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      }


})
//#24be6a , #1c9352 , #1a8b4d