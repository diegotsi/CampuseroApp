import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

import {LikeBar} from '../LikeBar'
import styles from './styles';
import I18n from '../../config/i18n';

class CardMural extends Component {
    componentDidMount(){
        //console.log(this.props.borderColor);
    }
    render(){
        return (
           <View style={styles.bgCardWall}>
                    <View style={{flexDirection:'row'}}>
                        <Image
                                source={{uri: 'https://api.adorable.io/avatars/250/'+Math.random()+'.png'}}
                                style={{height:50,width:50,borderRadius:25}}
                        />
                        <View style={{marginLeft:5}}>
                            <Text style={{marginTop:10,fontWeight:'bold'}}>Tonico Novaes</Text>
                            <Text style={{fontSize:12, color:'#ddd'}}>5 minutos atrás</Text>
                        </View>
                    </View>
                    <Text style={{flexWrap:'wrap',marginTop:20}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <LikeBar/>
                
                
           </View>
        );
    }
}

export default CardMural;