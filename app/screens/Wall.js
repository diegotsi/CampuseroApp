import React, { Component} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';

import { Container} from '../components/Container';
import { CardMural} from '../components/CardAgenda';
import { Loading} from '../components/Loading';



class Wall extends Component{
    constructor(props){
        super(props);
        
    }


    render(){
        return(
            <Container style={{backgroundColor:'#efefef'}}>
                <ScrollView>
                <CardMural/>
                <CardMural/>
                <CardMural/>
                <CardMural/>
                <CardMural/>
                <CardMural/>
                <CardMural/>
                </ScrollView>
            </Container>
             
        )
    }
}

const mapStateToProps = state => ({
    result: state.events,
    resultUser: state.user
});


export default connect(mapStateToProps)(Wall);