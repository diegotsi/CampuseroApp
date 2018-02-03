import React, { Component } from 'react';
import { View, Text} from 'react-native';
import moment from 'moment';
import {ptBr} from 'moment/locale/pt-br';

import styles from './styles';

class CardAgenda extends Component {
    componentDidMount(){
        //console.log(this.props.borderColor);
    }
    render(){
        const insideCardStyles = [styles.insideCard];
        insideCardStyles.push({borderLeftColor:this.props.borderColor});
        return (
           <View style={styles.bgCard}>
               <View style={insideCardStyles}>
                    <Text style={styles.title}>
                       {this.props.title}
                    </Text>
                    <Text style={styles.hour}>
                       {moment(this.props.startDate).format('HH:mm')} -  {moment(this.props.endDate).format('HH:mm')}, {this.props.locale}
                    </Text>
                    <Text style={styles.hashtags}>{this.props.hashtags}</Text>
                </View>
              
           </View>
        );
    }
}

export default CardAgenda;