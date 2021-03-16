import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  filter: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    height: 60,
    alignItems: "center",
  },
  filterTextActived: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#562596",
  },
  filterTextInative: {
    color: "#707070",
    fontWeight: "bold",
    fontSize: 18,
    opacity: 0.5,
  },

  activedText: {
    color: "#562596",
  },
  inativedText: {
    color: "#707070",
  },
  content: {
    width: "100%",
    marginTop: 25,
  },
  title: {
    width: "100%",
    borderColor: "#392d71",
    borderBottomWidth: 2,
    alignItems: "center",
  },

  titleText: {
    fontSize: 18,
    position: "relative",
    top: 12,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    color: "#392d71",
  },
});

export default styles;
