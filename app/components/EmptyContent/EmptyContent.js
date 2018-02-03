import React from 'react';
import { View,Text,TouchableOpacity, Image } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const EmptyContent = ({title,text,btnText,icon,onPress}) => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.title}>{title}</Text>
      <Image
          source={require('../../images/facesad.png')}
          resizeMode={'contain'}
          style={{width:130}}

        />
      <Text style={styles.text}>{text}</Text>

    </View>
  )
}

export default EmptyContent;
