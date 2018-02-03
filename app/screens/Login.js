import React, { Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Linking} from 'react-native';
import { Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import EStyleSheet from 'react-native-extended-stylesheet';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {CardaAgenda} from '../components/CardAgenda';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:'',
        }
    }

    componentWillMount(){
        console.log(this.props.result);
    }

    render(){
        return(
            <View
                style={{flex:1, backgroundColor:'#0099ff',alignItems:'center'}}
            >

                <Image
                    source={require('../images/logo-white.png')}
                    resizeMode={'contain'}
                    style={{width:200}}
                />

                <TouchableOpacity
                    onPress={()=> Linking.openURL("https://sandboxaccounts.campuse.ro/o/authorize/?response_type=code&client_id=JsZVPD3fEmZdE9HElgng3Y6Zxxpwi8kMh6g2OTMO&redirect_uri=https://campusero-api.herokuapp.com/campusero/code")}
                    style={styles.loginButton}
                >
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>

                
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    logo:{
        width:270,
    },
    background:{
        flex:1,
        //justifyContent:'center',
        backgroundColor:'#0099ff',
    },
    input:{
        borderColor: '#efefef',
        borderWidth: 1,
        backgroundColor:'#fff',
        padding:12,
        color:'#888',
        borderRadius:3,
        width: 250,
        marginBottom:5
    },
    loginButton:{
        backgroundColor: '#e82194',
        width: 250,
        padding:12,
        alignItems:'center',
        justifyContent:'center'

    },
    textLogin:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:15
    }
});
const mapStateToProps = state => ({
    result: state.homescreen,
  });
  
export default connect(mapStateToProps)(Login);