import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity } from 'react-native';
import I18n from '../../config/i18n';




import styles from './styles';

class LikeBar extends Component{
  
  render(){
    return(
      <View style={styles.bar}>
        <View style={styles.container}>
          <TouchableOpacity>
              <View style={styles.row}>
             <Icon name={'heart-o'} style={styles.icon} />
             <Text style={styles.text}>{I18n.t('like')}</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.row}>
              <Icon name={'comments-o'} style={styles.icon} />
              <Text style={styles.text}>{I18n.t('comment')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.row}>
                <Icon name={'share'} style={styles.icon} />
                <Text style={styles.text}>{I18n.t('share')}</Text>
            </View>
           </TouchableOpacity>
        </View>
      </View>
    )
  }
};




export default LikeBar;
