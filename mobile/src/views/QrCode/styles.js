import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
     flex: 1,
     flexDirection: 'column',
     backgroundColor:'#392d71' 
  },
  
  header: {
    width: '100%',
    height: 90,
    backgroundColor: '#392d71',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#d3b091',
    borderBottomWidth: 5
  },

  headerText: {
    color: '#d3b091',
    fontWeight: 'bold',
    fontSize:16
  },
  containerButtons: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  buttonBack: {
    backgroundColor: '#EE6B26',
    width: '45%',
    height:50,
    padding: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  buttonScanActive: {
    backgroundColor: 'green',
    width: '45%',
    padding: 10,
    
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    opacity: 1
  },
  buttonScanInative: {
    backgroundColor: '#20295F',
    width: '45%',
    padding: 10,
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    opacity: 0.7,
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12
  }
})

export default styles;