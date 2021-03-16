import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
//  import Icon from 'react-native-vector-icons/FontAwesome5'; 

export default function Footer({ icon, onPress }) {
  
  return (

    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress = {onPress}>
        {
          icon == "plus-circle" 
            ?
            <Icons name='plus-circle' size={60} color='#d3b091' />
            :
            <Icons name='check-circle' size={60} color='#d3b091' />
        }
      </TouchableOpacity>
      <Text style={styles.text}>Organizando sua vida</Text>
    </View>
  )

}