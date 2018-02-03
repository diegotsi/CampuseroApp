import React, { Component} from 'react';
import { StatusBar, View, Platform, Linking, AsyncStorage } from 'react-native';
import {Router, Scene, Stack, Actions, Reducer} from 'react-native-router-flux';
import Store from './store';
import { Provider, connect } from 'react-redux';
import { TabIcon} from "../components/BottomBar";

import CustomRouter from "./customrouter";

//Screens
import Home from '../screens/Home';
import Login from '../screens/Login';
import Settings from '../screens/Settings';
import Wall from '../screens/Wall';
import EventDetail from '../screens/EventDetail';
import Profile from '../screens/Profile';

import {loginRequest} from '../actions/user';

import I18n from '../config/i18n';

class Route extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasToken: null
        }
    }


    componentDidMount() {
        AsyncStorage.getItem('JWT').then((token) => {
            console.log(token);
            this.setState({ hasToken: true})
        });
        // B
        if (Platform.OS === 'android') {
          Linking.getInitialURL().then(url => {
            this.navigate(url);
          });
        } else {
            Linking.addEventListener('url', this.handleOpenURL);
          }
        }
      
    componentWillUnmount() { // C
          Linking.removeEventListener('url', this.handleOpenURL);
        }
        handleOpenURL = (event) => { // D
          this.navigate(event.url);
        }

         navigate = async(url) => { // E
          const route = url.replace(/.*?:\/\//g, '');
          const id = route.match(/\/([^\/]+)\/?$/)[1];
          const routeName = route.split('/')[0];
      
          if (routeName === 'token') {
              console.log(id);
            let token = id.split(':')[0];
            console.log(token);
            try {
                await AsyncStorage.setItem('JWT',token);
            } catch (error) {
              console.log(error);
            }
            Actions.home({token});
                
          };
        }

    render(){
        return(
            <View style={{flex:1}}>
            <StatusBar  barStyle="light-content"/>
                <Provider store={Store}>
                <CustomRouter>
                    <Scene key="root">
                    <Scene
                        key="tabbar"
                        tabs
                        tabBarStyle={{ backgroundColor: '#FFFFFF', borderTopColor:'#ddd' }}
                        tabBarPosition={'bottom'}
                        swipeEnabled
                        backToInitial
                        initial={this.state.hasToken}
                        showLabel={false}
                    >
                        <Scene
                            key="home"
                            component={Home}
                            title={I18n.t('agenda')}
                            icon={TabIcon}
                            iconName={'calendar-o'}
                            iconSelectName={'calendar'}
                            navigationBarStyle={{backgroundColor:'#0099ff'}}
                            titleStyle={{color:'#fff'}}
                            initial
                        />
                        <Scene
                            key="wall"
                            component={Wall}
                            title={I18n.t('wall')}
                            icon={TabIcon}
                            iconName={'clipboard'}
                            iconSelectName={'clipboard'}
                            navigationBarStyle={{backgroundColor:'#0099ff'}}
                            titleStyle={{color:'#fff'}}
                        />
                        <Scene
                            key="profile"
                            component={Profile}
                            title={I18n.t('profile')}
                            icon={TabIcon}
                            iconName={'user-o'}
                            iconSelectName={'user'}
                            navigationBarStyle={{backgroundColor:'#0099ff'}}
                            titleStyle={{color:'#fff'}}
                        />
                         <Scene
                            key="settings"
                            component={Settings}
                            title={I18n.t('settings')}
                            icon={TabIcon}
                            iconName={'cog'}
                            iconSelectName={'cog'}
                            navigationBarStyle={{backgroundColor:'#0099ff'}}
                            titleStyle={{color:'#fff'}}
                        />


                       
                    </Scene>
                        <Scene
                            key="login"
                            component={Login}
                            title={'Login'}
                            hideNavBar
                            initial={!this.state.hasToken}
                           
                        />
                        <Scene
                            key="eventdetail"
                            component={EventDetail}
                            title={I18n.t('detail')}
                            navigationBarStyle={{backgroundColor:'#0099ff'}}
                            titleStyle={{color:'#fff'}}
                            tintColor='#fff'
                            navBarTintColor='#fff'
                            navBarButtonImageColor= '#fff'
                        />
                         
                    </Scene>
                    
                </CustomRouter>
                </Provider>
           
            </View>
        )
    }
}

export default Route;


