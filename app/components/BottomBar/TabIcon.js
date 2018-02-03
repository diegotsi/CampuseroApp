import React, {Component} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

class TabIcon extends Component{
    constructor(props) {
        super(props);
        
      }
    render(){
        return(
            <View style={{alignItems:'center',justifyContent:'center'}}>
             <Icon name={this.props.focused ? this.props.iconSelectName : this.props.iconName} size={23} color={this.props.focused ? '#0099ff' : '#8c8c8c'}/>
            <Text style={{fontSize:8,color:this.props.focused ? '#0099ff' : '#8c8c8c',fontWeight: '500',textAlign:'center',marginTop:3}}>{this.props.title}</Text>
            </View>
        )
    }
}


const mapStateToProps = state => ({
    resultNotifications: state.notifications,
});
  
export default connect(mapStateToProps)(TabIcon);