import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import {ptBr} from 'moment/locale/pt-br';

import styles from './styles';


import { getAgenda} from '../../actions/events';

class ListDays extends Component {
    constructor(props){
        super(props);
        this.state = {
            days:[],
        }

        this.addDay = this.addDay.bind(this);
    }

    async addDay(i){
        await this.setState({days: this.state.days.concat({id:Math.random(),date:moment(this.props.startDate).add(i, 'days').format()})});
    }
    
    componentDidMount(){
        let date1 = moment(this.props.startDate);
        let date2 = moment(this.props.endDate);
        let diff = date2.diff(date1)/86400000;

        let array = this.state.days;
        array.push({date:moment(this.props.startDate).format()});
        for(let i=1; i<=diff; i++){
           array.push({date:moment(this.props.startDate).add(i, 'days').format()});
        }
        

        this.setState({days: array});

    }
    render(){
        if(!this.state.days){
            return(<Text>Oi</Text>)
        }else{
            console.log(this.state.days);
        return (
           <View style={styles.leftBar}>
               {this.state.days.map(day =>
                     <TouchableOpacity
                        onPress={() => {this.props.dispatch(getAgenda(1,moment(day.date).format(),moment(day.date).add(1, 'days').format()))}}
                        style={styles.item}
                    >
                            <Text style={styles.day}>{moment(day.date).format('ddd')}</Text>
                            <Text style={styles.textItem}>{moment(day.date).format('DD')}</Text>
                    </TouchableOpacity>
                )}
              
           </View>
        );
    }
    }
}

const mapStateToProps = state => ({
    result: state.events,
});
  
export default connect(mapStateToProps)(ListDays);