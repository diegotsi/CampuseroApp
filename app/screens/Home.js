import React, { Component} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';

import { getAgenda, getEvents} from '../actions/events';
import { loginRequest, newCheckin}  from '../actions/user';

import { Container} from '../components/Container';
import { CardAgenda} from '../components/CardAgenda';
import { ListDays} from '../components/ListDays';
import { EmptyContent} from '../components/EmptyContent';
import { Loading} from '../components/Loading';

import I18n from '../config/i18n';


const borderColor = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)]
}
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            arrayColors: ['#0099ff','#212e6b','#f27021','#ffcf08','#e82194','#f27021','#4bd3cf','#ee3442','#33b056']
        }
    }

    componentDidMount(){
        this.props.dispatch(getAgenda(1));
        this.props.dispatch(getEvents(1));
    }

    checkin(){
        this.props.dispatch(newCheckin('abertura-academia-creator-cpbr11', 'diegotsi'));
    }
    
    _keyExtractor = (item, index) => item.slug;

    render(){
        return(
            !this.props.result.data || !this.props.result.event || this.props.result.showLoading?
            <Loading/>
            :
            <Container style={{backgroundColor:'#efefef'}}>
                 <ListDays
                    endDate={this.props.result.event.end_date}
                    startDate={this.props.result.event.start_date}
                 />
                 <FlatList
                    data={this.props.result.data}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    ListEmptyComponent={() =>
                        <EmptyContent
                            title={'Não há evento nessa data'}
                            text={'Crie um novo evento '}
                            icon={'bell'}
                            btnText={'Criar Post'}
                        >
                        </EmptyContent>
                    }
                    renderItem={({item}) =>
                                        <TouchableOpacity
                                            onPress={() => Actions.eventdetail({slug:item.slug})}
                                        >
                                        <CardAgenda
                                            title={item.title}
                                            locale={item.stadium_name}
                                            startDate={item.start_date}
                                            endDate={item.end_date}
                                            borderColor={borderColor(this.state.arrayColors)}
                                            hashtags={item.main_hashtag}

                                        />
                                        </TouchableOpacity>
                    }
                />
            </Container>
             
        )
    }
}

const mapStateToProps = state => ({
    result: state.events,
    resultUser: state.user
});


export default connect(mapStateToProps)(Home);