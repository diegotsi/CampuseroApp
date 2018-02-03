import React, {Component} from "react";
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity} from "react-native";
import { Actions } from 'react-native-router-flux';

import styles from "./styles";

export default class Hashtag extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const hashtagStyles = [styles.hashtag];
    if(this.props.backgroundColor){
      hashtagStyles.push({backgroundColor:this.props.backgroundColor});
    }
   
    return(
      <View>
          <Text style={{marginLeft:10,marginTop:20,marginBottom:5,color:'#333',fontWeight:'bold'}}>{this.props.title}</Text>
          <View style={{flexDirection:'row',flexWrap: 'wrap',marginLeft:10}}>
          {this.props.hashtags.map((item) => {
            return(
              <TouchableOpacity
                  key={Math.round(Math.random() * 1000000)}
                  //underlayColor={styles.$underlayColor}
                  style={{borderRadius:10}}
              >
                  <Text style={hashtagStyles}>{item.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    );
  }
}
