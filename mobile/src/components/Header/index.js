import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Header({
  showNotification,
  showBack,
  pressNotification,
  late,
  navigation,
}) {
  function back() {
    navigation.navigate("Home");
  }

  function openQrCode() {
    navigation.navigate("QrCode");
  }
  return (
    <View style={styles.header}>
      {showBack ? (
        <TouchableOpacity style={styles.leftIcon} onPress={back}>
          <Icons name="arrow-left" size={35} color="#d3b091" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.leftIcon} onPress={openQrCode}>
          <Icons name="qrcode-scan" size={35} color="#d3b091" />
        </TouchableOpacity>
      )}

      <Text style={styles.logo}>
        ToD
        <Icon name="check-circle" size={30} color="#d3b091" />
      </Text>

      {showNotification && (
        <TouchableOpacity
          style={styles.notification}
          onPress={pressNotification}
        >
          <Icon name="bell" size={33} color="#d3b091" />
          {late > 0 && (
            <View style={styles.circle}>
              <Text style={styles.notificationText}>{late}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}
