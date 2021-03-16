import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    width: "100%",
  },

  content: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    width: "100%",
  },

  activityIndicator: {
    marginTop: 50,
    alignItems: "center",
  },
  imageIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 8,
    marginTop: 10,
  },
  label: {
    color: "#707070",
    fontSize: 18,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 5,
    alignSelf: "flex-start",
    marginHorizontal: 10,
  },
  input: {
    fontSize: 18,
    padding: 10,
    width: "90%",
    borderBottomWidth: 1.5,
    borderBottomColor: "#562596",
    marginHorizontal: 10,
  },
  inputArea: {
    fontSize: 18,
    padding: 10,
    width: "90%",
    borderWidth: 1.5,
    borderColor: "#562596",
    marginHorizontal: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: "top",
  },
  inLine: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 50,
  },
  inputInline: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  switchLabel: {
    fontWeight: "bold",
    color: "#562596",
    textTransform: "uppercase",
    fontSize: 16,
    paddingLeft: 10,
   
  },
  removeLabel: {
    fontWeight: "bold",
    color: "#CC0000",
    textTransform: "uppercase",
    fontSize: 16,
  },
  inativeIcon: {
    opacity: 0.7,
  },
});

export default styles;
