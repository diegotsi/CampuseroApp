import React, { Component} from "react";
import PropTypes from 'prop-types';
import {ActivityIndicator, View, Text } from "react-native";

import styles from "./styles";

class Loading extends Component{
    constructor(props){
        super(props);
        this.state = {
            wow: 'Ô'
        }
    }
    componentWillMount(){
        setInterval( () => { 
            this.setState({
                wow: this.state.wow.length%2 === 0 ? this.state.wow+'Ô' : this.state.wow+'ô'
            })
        }, 200);
    }

    render(){
        return(
            <View style={styles.centering}>
            <ActivityIndicator
                color={'#f27021'}
                style={{height: 80}}
                size={'large'}
                animating
            />
            <Text style={{fontSize:20, fontWeight:'bold', color:'#f27021'}}>{this.state.wow}</Text>
            </View>

           
            
        )
    }

}

export default Loading;

