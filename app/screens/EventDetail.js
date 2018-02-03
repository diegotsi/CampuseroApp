import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image, ScrollView, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container} from '../components/Container';
import { Loading} from '../components/Loading';
import moment from 'moment';
import {ptBr} from 'moment/locale/pt-br';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';

import { getActivity, newEvaluation} from '../actions/events';
import { newCheckin, resetSuccess} from '../actions/user';

import I18n from '../config/i18n';

class EventDetail extends Component {

    constructor(props){
        super(props);
        this.state= {
            note: 0
        }
    }

    componentDidMount(){
        this.props.dispatch(getActivity(this.props.slug));
    }

    componentWillUnmount(){
       
        this.props.dispatch(resetSuccess());
    }


    render(){
        return(
            !this.props.resultEvent.oneEvent || !this.props.resultUser.data?
                <Loading/>
            :
           <ScrollView>
            <Container style={{backgroundColor:'#fff'}}>
           <Image
            style={{width: '100%', height: 200}}
            source={{uri: this.props.resultEvent.oneEvent.background_image.replace('http://','https://')}}
            />
            <View style={{marginTop:10,marginLeft:10,marginRight:10}}>
                <Text style={{textAlign:'center',fontSize:20}}>{this.props.resultEvent.oneEvent.title}</Text>
                <View style={{alignItems:'center',marginTop:10}}>
                {this.props.resultEvent.evaluation ?
                <View style={{width:'50%'}}>
                    <View style={{flexDirection:'row'}}>
                    <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={parseFloat(this.props.resultEvent.evaluation.average)}
                            starSize={15}
                            starColor={'#fcbda1'}
                            //selectedStar={(note) => this.setState({note})}
                    />
                    <Text style={{marginLeft:5,fontSize:12}}>{I18n.t('numberOfEvaluations')}: {this.props.resultEvent.evaluation.evaluations}</Text>
                    </View>
                </View>
                : null}
                </View>
                <Text style={{textAlign:'center',marginTop:10}}>
                    {moment(this.props.resultEvent.oneEvent.start_date).format('DD/MM/YYYY HH:mm')} -  {moment(this.props.resultEvent.oneEvent.end_date).format('HH:mm')}, {this.props.resultEvent.oneEvent.stadium_name}
                </Text>
                {
                    this.props.resultUser.success?
                    <TouchableOpacity
                       // onPress={()=> this.props.dispatch(newCheckin(this.props.resultEvent.oneEvent.slug, this.props.resultUser.data.username)) }
                        style={{marginTop:10, backgroundColor:'#33b056',padding:10,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>{I18n.t('checkinDone')}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                    onPress={()=> this.props.dispatch(newCheckin(this.props.resultEvent.oneEvent.slug, this.props.resultUser.data.username)) }
                    style={{marginTop:10, backgroundColor:'#ee3442',padding:10,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#fff', fontWeight:'bold'}}>Check-in!</Text>
                    </TouchableOpacity>
                }
                <View style={{width:'100%',marginTop:20,justifyContent:'center',alignItems:'center'}}> 
                    <View style={{width:'50%'}}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.props.resultUser.evaluation ?  this.props.resultUser.evaluation.average : this.state.note }
                        starSize={25}
                        starColor={'#ffcf08'}
                        selectedStar={(note) => this.setState({note})}
                    />
                    </View>
                    <TouchableOpacity
                        onPress={()=> this.props.dispatch(newEvaluation(this.props.resultEvent.oneEvent.slug, this.state.note)) }
                        style={{marginTop:10, backgroundColor:'#4bd3cf',padding:10,alignItems:'center',justifyContent:'center',width:'50%'}}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>{I18n.t('rate')}</Text>
                    </TouchableOpacity>
                </View>
               
                <Text style={{marginTop:20}}>
                    {unescape(encodeURIComponent(this.props.resultEvent.oneEvent.description.replace(/<\/?[^>]+(>|$)/g, '')))}
                </Text>
            </View>
               
               
            </Container>
            </ScrollView>
        )
    }
}

const styles = EStyleSheet.create({
    name:{
        fontSize:14,
        fontWeight:'bold'
    }
});

const mapStateToProps = state => ({
    resultEvent: state.events,
    resultUser: state.user,
});




export default connect(mapStateToProps)(EventDetail);