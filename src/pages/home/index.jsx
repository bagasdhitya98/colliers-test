import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../../components/Button";
import Layout from "../../components/Layout";

const Home = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Employee Management</Text>
        <Text style={styles.description}>
          This is an employee management application. You can create new
          employees or view the list of existing employees.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate("CreateEmployee")}
            title="Create Employee"
          />
          <Button
            onPress={() => navigation.navigate("ListEmployee")}
            title="List Employee"
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "white",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    color: "white",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 40,
    gap: 10,
  },
});

export default Home;
