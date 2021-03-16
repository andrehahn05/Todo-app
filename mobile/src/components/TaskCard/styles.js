import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
     backgroundColor:'#fff',
    padding:10,
    marginVertical:10,
    bottom:10,
    width:'90%',
    height:80,
    shadowColor:'#ccc',
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:5,
    elevation:4,
    borderRadius:10,
    
  },
  
  leftSide:{
    flexDirection:'row',
    alignItems:'center',
  
  },
  typeActive:{
    width: 50,
    height: 50,
    
  },
  done:{
    opacity:0.5
  },
  cardTitle:{
    fontSize:18,
    color:'#562596',
    padding:10,

  },
  rightSide:{
    alignItems:'flex-end',
    justifyContent:'space-between',
    
    
  },
  cardDate:{
    fontSize:16,
    color:'#562596',
    fontWeight:'bold'
    
  },
  cardTime:{
    fontSize:16,
    color:'#707070',
    fontWeight:'bold'
  }
})
 
export default styles ;

