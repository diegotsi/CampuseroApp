import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    leftBar: {
        width: '100%',
        height: 'auto',
        backgroundColor:'#0099ff',
        //justifyContent:'center',
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row'
    },
    item:{
        alignItems:'center',
        height:50,
        width:50,
        borderRadius:25,
        backgroundColor:'#fff',
        marginRight:10,
        marginTop:5,
        padding:6
    },
    day:{
        color:'#0099ff'
    },
    textItem:{
        color:'#0099ff',
        fontSize:17,
        fontWeight:'bold'
    }
   
  })
