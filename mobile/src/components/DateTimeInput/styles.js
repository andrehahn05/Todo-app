import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
      fontSize: 18,
      padding: 10,
      width: '90%',
      borderBottomWidth: 1.5, 
      borderBottomColor: '#562596',
      marginHorizontal: 10,
      marginVertical: 20,
      alignSelf:'center',
      color:'#003'
    },
    inputError:{
      fontSize: 18,
      padding: 10,
      width: '90%',
      borderBottomWidth: 1.5, 
      borderBottomColor: 'red',
      marginHorizontal: 10,
      marginVertical: 20,
      alignSelf:'center',
      color:'red'
    },
    iconTextInput: {
      position: 'absolute',
      right: '5%',
      top: 35,
      width: 25,
      height: 25,
      resizeMode: 'contain' 
    }
});

export default styles;
