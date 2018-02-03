import React, { Component} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAgenda, getEvents} from '../actions/events';
import { loginRequest, newCheckin}  from '../actions/user';

import { Container} from '../components/Container';
import { CardAgenda} from '../components/CardAgenda';
import { Loading} from '../components/Loading';



class Settings extends Component{
    constructor(props){
        super(props);
        
    }


    render(){
        return(
            <Container style={{backgroundColor:'#efefef'}}>
                <TouchableOpacity onPress={() => {Actions.login(); AsyncStorage.clear()}} style={{flexDirection:'row',backgroundColor:'#fff',alignItems:'center',padding:20}}>
                        <Icon name={'power-off'} color={'#ee3442'} size={30} /><Text style={{marginLeft:10}}>Sair</Text>
                </TouchableOpacity>
               
            </Container>
             
        )
    }
}

const mapStateToProps = state => ({
    result: state.events,
    resultUser: state.user
});


export default connect(mapStateToProps)(Settings);