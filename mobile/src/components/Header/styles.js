import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 85,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#392d71",
    borderBottomWidth: 5,
    borderBottomColor: "#d3b091",
  },

  logo: {
    paddingTop: 14,
    color: "#d3b091",
    fontSize: 35,
  },

  notification: {
    position: "absolute",
    right: 35,
    paddingTop: 25,
    color: "#d3b091",
  },
  notificationText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#392d71",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 4,
    top: 1,
  },

  circle: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 25,
    top: 25,
    backgroundColor: "#d3b091",
    width: 26,
    height: 26,
  },

  leftIcon: {
    position: "absolute",
    left: 15,
    paddingTop: 25,
  },
});

export default styles;
