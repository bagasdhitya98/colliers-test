import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Snackbar } from "react-native-paper";

import createEmployee from "../../utils/api/create_employee";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Input from "../../components/Input";

const CreateEmployee = ({ navigation }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    address: "",
    city: "",
    county: "",
    state: "",
    zip: "",
    phone1: "",
    phone2: "",
    email: "",
    web: "",
  });

  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: "",
    success: false,
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const fieldLabels = {
    first_name: "Your First Name",
    last_name: "Your Last Name",
    company_name: "Company Name",
    address: "Address",
    city: "City",
    county: "County",
    state: "State",
    zip: "ZIP Code",
    phone1: "Phone Number 1",
    phone2: "Phone Number 2",
    email: "Email Address",
    web: "Website",
  };

  const questions = Object.keys(formData);

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTimeout(async () => {
        const result = await createEmployee(formData);
        if (result) {
          setSnackbar({
            message: "Successfully created employee",
            visible: true,
            success: true,
          });
          navigation.navigate("ListEmployee");
        } else {
          setSnackbar({
            message: "Failed created employee",
            visible: true,
            success: false,
          });
        }
      }, 1000);
    }
  };

  const onDismissSnackBar = () => {
    setSnackbar({ ...snackbar, visible: false });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.questionContainer}>
      <Text style={{ color: "white" }}>{fieldLabels[item]}</Text>
      <Input
        style={styles.input}
        value={formData[item]}
        onChangeText={(text) => setFormData({ ...formData, [item]: text })}
      />
    </View>
  );

  return (
    <Layout>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            marginHorizontal: 40,
            marginVertical: 40,
            color: "white",
            fontSize: 30,
          }}
        >
          {`Please fill in your ${
            fieldLabels[questions[currentQuestionIndex]]
          }`}
        </Text>
        <FlatList
          style={{ marginHorizontal: 40 }}
          data={[questions[currentQuestionIndex]]}
          keyExtractor={(item) => item}
          renderItem={renderItem}
        />
        <View style={{ marginHorizontal: 40 }}>
          <Button
            title={
              currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"
            }
            onPress={handleNextQuestion}
          />
        </View>
      </View>
      <Snackbar
        visible={snackbar.visible}
        onDismiss={onDismissSnackBar}
        duration={Snackbar.DURATION_SHORT}
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 300,
        }}
        action={{
          label: snackbar.success ? "✓" : "!",
          labelStyle: { color: snackbar.success ? "green" : "red" },
          onPress: onDismissSnackBar,
        }}
      >
        <Text style={{ color: snackbar.success ? "green" : "red" }}>
          {snackbar.message}
        </Text>
      </Snackbar>
    </Layout>
  );
};

export default CreateEmployee;

const styles = StyleSheet.create({
  questionContainer: {
    marginBottom: 20,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    color: "white",
  },
});
