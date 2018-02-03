import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(79, 81, 140, 1.0)',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  row:{
    flexDirection:'row',
    padding:10,
    borderBottomWidth:1,
    borderColor:'#f6f4f4'
  },
  title:{
    marginLeft:10,
    fontWeight:'700',
    color:'#4c4c4c'

  },
  containerWithTitle:{
    flex:1,
    backgroundColor:'#ffffff',
    borderWidth:1,
    borderColor:'#e4e2e2',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
  },
  containerPost:{
    flex:1,
    marginRight:2,
    marginBottom:5,
    maxWidth:'32,5%'
  },
  postText:{
    color:'#ffffff',
    textAlign:'center',
  },

  content:{
    alignItems:'center',
    padding:10
  },
  image:{
    flex: 1,
    height:120,
    width: '100%' -5,
    resizeMode:'cover'
  }
});
