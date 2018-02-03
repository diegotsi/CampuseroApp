import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity,AsyncStorage} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container} from '../components/Container';
import {Actions} from 'react-native-router-flux';
import { Loading} from '../components/Loading';
import { Hashtag} from '../components/Hashtag';
import moment from 'moment';
import {ptBr} from 'moment/locale/pt-br';
import { connect } from 'react-redux';

import { lastCheckin,loginRequest} from '../actions/user';

import I18n from '../config/i18n';

class Profile extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        AsyncStorage.getItem('JWT').then((token) => {
            this.props.dispatch(loginRequest(token));
        });
        
    }

    render(){
        return(
            !this.props.resultUser.data || !this.props.resultEvents.oneEvent?
                <Loading/>
            :
            <Container style={{backgroundColor:'#fff'}}>
                <View style={styles.backgroundProfile}>
                    <View style={{flexDirection:'row'}}>
                    <Image
                        source={{uri: 'https://sandbox.campuse.ro'+this.props.resultUser.data.avatar_url}}
                        style={{width: 100, height: 100, borderRadius:50}}
                    />
                     <View style={{marginTop:10,marginLeft:10}}>
                        <Text style={styles.name}>{this.props.resultUser.data.first_name} {this.props.resultUser.data.last_name}</Text>
                        <Text style={{marginTop:3}}>{this.props.resultUser.data.gender_name}</Text>
                        <Text style={{marginTop:3}}>{moment(this.props.resultUser.data.date_of_birth).format('DD/MM/YYYY')}</Text>
                        <Text style={{marginTop:3}}>{this.props.resultUser.data.city_name}</Text>
                     </View>
                     </View>
                     <Text style={{marginTop:20,textAlign:'center'}}>{this.props.resultUser.data.about}</Text>
                     <Hashtag title={I18n.t('specialities')} hashtags={this.props.resultUser.data.specialities}></Hashtag>
                     <Hashtag title={I18n.t('interestsAreas')} hashtags={this.props.resultUser.data.interest_tags} backgroundColor={'#ffcf08'}></Hashtag>
                </View>
                
                <View style={{marginLeft:10,marginTop:10,marginRight:10}}>
                    <Text style={{fontWeight:'bold'}}>{I18n.t('lastCheckin')}</Text>
                    <Text>{this.props.resultEvents.oneEvent.event_name}</Text>
                    <Text>{this.props.resultEvents.oneEvent.stadium_name}</Text>
                    <Text>{moment(this.props.resultEvents.oneEvent.start_date).format('DD/MM/YYYY HH:mm')} -  {moment(this.props.resultEvents.oneEvent.end_date).format('HH:mm')}</Text>
                    <TouchableOpacity
                        onPress={() => Actions.home()}
                        style={{marginTop:10, backgroundColor:'#f27021',padding:10,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>{I18n.t('seeTalks')}</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}

const styles = EStyleSheet.create({
    backgroundProfile: {
        backgroundColor:'#f0f0f0',
        padding:10
    },
    name:{
        fontSize:14,
        fontWeight:'bold'
    }
});

const mapStateToProps = state => ({
    resultUser: state.user,
    resultEvents: state.events
});




export default connect(mapStateToProps)(Profile);