import React, { useMemo } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { format } from "date-fns";
import styles from "./styles";
import typeIcons from "../../utils/typeIcons";

export default function TaskCard({ done, title, when, type, onPress }) {
  const date = useMemo(() => format(new Date(when), "dd/MM/yyyy"));
  const hour = useMemo(() => format(new Date(when), "HH:mm"));

  return (
    <TouchableOpacity
      style={[styles.container, done && styles.done]}
      onPress={onPress}
      when={when}
    >
      <View style={styles.leftSide}>
        <Image source={typeIcons[type]} style={styles.typeActive} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.cardDate}>{date}</Text>
        <Text style={styles.cardTime}>{hour}</Text>
      </View>
    </TouchableOpacity>
  );
}
