import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";

const Layout = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021850",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
