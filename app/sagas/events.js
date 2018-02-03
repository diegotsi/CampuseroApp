import { takeEvery, call, put, select, all } from "redux-saga/effects";
import {delay} from "redux-saga";
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
    GET_AGENDA,
    GET_AGENDA_RESULT,
    GET_EVENTS,
    GET_EVENTS_RESULT,
    GET_ACTIVITY,
    GET_ACTIVITY_RESULT,
    GET_EVALUATION,
    GET_EVALUATION_RESULT,
    NEW_EVALUATION,
    NEW_EVALUATION_RESULT
} from "../actions/events";

import {
  
} from "../actions/user";

function* getAxios(){
    var instance = axios.create({
    baseURL: 'https://sandboxapi.campuse.ro',
    timeout: false,
    //headers: {'Authorization': 'Bearer'}
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


function* getAgenda(action)
{
  var instance = yield call(getAxios);
  let result = false;
  let url = '/agenda/list/campus-party-brasil-2018'
  let message = '';

  if(action.endDate){
    url = `/agenda/list/campus-party-brasil-2018/?from='${action.startDate}&to=${action.endDate}`;
  }
  
  yield instance.get(url).then(function(response) {
    console.log(response);
    result = response.data.results;
  }).catch(function (error) {
    if (error.response) {
      console.log('Error', error.response);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
    
  });
  yield put({ type: GET_AGENDA_RESULT, result});
  
}

function* getEvents(action)
{
  var instance = yield call(getAxios);
  let result = false;
  let message = '';
  
  yield instance.get('/event/list/').then(function(response) {
    result = response.data.results[0];
  }).catch(function (error) {
    if (error.response) {
      console.log('Error', error.response);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  yield put({ type: GET_EVENTS_RESULT, result});
  
}

function* getEvaluation(action){
  var instance = yield call(getAxiosApi);
  let result = false;
  let success = null;
  let message = '';
  
  yield instance.get('/evaluations/'+action.slug).then(function(response) {
    console.log(response);
    success = true;
    result = response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('Error', error.response);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  yield put({ type: GET_EVALUATION_RESULT, result, success});
}

function* getActivity(action)
{
  var instance = yield call(getAxios);
  let result = false;
  let success = null;
  let message = '';
  
  yield instance.get('/agenda/activity/'+action.slug).then(function(response) {
    console.log(response);
    success = true;
    result = response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('Error', error.response);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  yield put({ type: GET_ACTIVITY_RESULT, result, success});
  
  yield getEvaluation({slug:action.slug});
  
}

const getJWT = async (key) => {
  const value = await AsyncStorage.getItem(key);
  return value;
}

function* newEvaluation(action)
{
  const JWT = yield call(getJWT,'JWT');
  console.log(JWT);
  var instance = yield call(getAxiosApi, JWT);
  let result = false;
  let success = null;
  
  let message = '';
  let data = {
    note:action.score,
    slug: action.slug,
    token: JWT
  }
    
  
  yield instance.post('/evaluations/',data).then(function(response) {
    console.log(response);
    success = true;
    result = response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('Error', error.response);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
    
  });

  yield put({ type: NEW_EVALUATION_RESULT, result, success});
  
}

export default function* sagaEvents() {
    yield takeEvery(GET_AGENDA, getAgenda);
    yield takeEvery(GET_ACTIVITY, getActivity);
    yield takeEvery(GET_EVENTS, getEvents);
    yield takeEvery(NEW_EVALUATION, newEvaluation);
}
  