import { takeEvery, call, put, select, all } from "redux-saga/effects";
import {delay} from "redux-saga";
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
   LOGIN_REQUEST,
   LOGIN_REQUEST_RESULT,
   LAST_CHECKIN,
   LAST_CHECKIN_RESULT,
   NEW_CHECKIN,
   NEW_CHECKIN_RESULT,

} from "../actions/user";

import {GET_ACTIVITY} from '../actions/events';

function* getAxios(JWT){
    var instance = axios.create({
    baseURL: 'https://sandboxapi.campuse.ro',
    timeout: false,
    crossDomain:true,
    headers: { 'Access-Control-Allow-Origin': '*','Content-Type': 'application/json', 'Authorization': 'Bearer ' + JWT}
});
return instance;
}

function* getAxiosApi(JWT){
  var instance = axios.create({
  baseURL: 'https://campusero-api.herokuapp.com/campusero/',
  timeout: false,
  headers: { 'Authorization': 'Bearer ' + JWT}
});

  return instance;
}

function* requestLogin(action)
{
  var instance = yield call(getAxios,action.token);
  let result = false;
  
  let message = '';

  
  
  yield instance.get(`/user/myprofile/`).then(function(response) {
    console.log(response);
    result = response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('Error', error.response);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
    
  });
  yield put({ type: LOGIN_REQUEST_RESULT, result});
  yield lastCheckin({username:result.username});
  
}

function* lastCheckin(action)
{
  var instance = yield call(getAxiosApi);
  let result = false;
  
  let message = '';


  yield instance.get(`/last_checkin?username=${action.username}`).then(function(response) {
    console.log(response);
    result = response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('Error', error.response);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
    
  });

  yield put({ type: LAST_CHECKIN_RESULT, result});

  yield put({type: GET_ACTIVITY, slug: result.data.attributes.slug});
  
  
}

function* newCheckin(action)
{
  var instance = yield call(getAxiosApi);
  let result = false;
  let success = null;
  
  let message = '';


  yield instance.post('/checkins',{checkin:{username:action.username,slug:action.slug}}).then(function(response) {
    console.log(response);
    success = true;
    result = response.data.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('Error', error.response);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

  yield put({ type: NEW_CHECKIN_RESULT, result, success});
  yield lastCheckin({username:action.username});
  
}

const getJWT = async (key) => {
  const value = await AsyncStorage.getItem(key);
  return value;
}

export default function* sagaEvents() {
    yield takeEvery(LOGIN_REQUEST, requestLogin);
    yield takeEvery(LAST_CHECKIN, lastCheckin);
    yield takeEvery(NEW_CHECKIN, newCheckin);
}
  