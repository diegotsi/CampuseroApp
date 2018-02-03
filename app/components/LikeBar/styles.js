import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  row: {
    flexDirection: 'row',
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  icon:{
    color: '$iconsGray',
    fontSize: 20
  },
  text: {
    color: '#8d8d8d',
    marginLeft: 10,
    marginTop: 3,
    fontSize: 12,
    fontWeight: '900',
  },
   bar:{
    borderTopWidth:1,
    borderColor: '#efefef',
    backgroundColor: '#fff',
    alignItems: 'center',
    zIndex:0
  }
});
