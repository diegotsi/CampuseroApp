import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children,style }) => {
  const containerStyles = [styles.container];
  containerStyles.push(style);
  return (
    <View style={containerStyles}>
      {children}
    </View>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string,
  style: PropTypes.object
};
export default Container;
