import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const Input = ({ label, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  input: {
    backgroundColor: "#CAD9FF",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

export default Input;
