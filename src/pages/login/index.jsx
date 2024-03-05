import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Snackbar } from "react-native-paper";

import submitLogin from "../../utils/api/login";
import { saveData } from "../../utils/services/storage";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = ({ navigation }) => {
  const [auth, setAuth] = useState({ username: "", password: "" });
  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: "",
    success: false,
  });

  const handleLogin = async () => {
    const result = await submitLogin(auth);
    if (result.success === true) {
      await saveData("token", { token: result?.token }, 86400);
      setSnackbar({
        visible: true,
        message: "Login successful",
        success: true,
      });
      setTimeout(() => {
        navigation.navigate("ListEmployee");
      }, 1000);
    } else {
      setSnackbar({ visible: true, message: "Login failed", success: false });
    }
  };

  const onDismissSnackBar = () => {
    setSnackbar({ ...snackbar, visible: false });
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>
          Manage Your Team{"\n"}
          Effortlessly
        </Text>
        <View style={styles.layout_input}>
          <Input
            label={"Username"}
            value={auth.username}
            onChangeText={(value) => setAuth({ ...auth, username: value })}
          />
          <Input
            label={"Password"}
            value={auth.password}
            onChangeText={(value) => setAuth({ ...auth, password: value })}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.layout_button}>
          <Button title="Login" onPress={handleLogin} />
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
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  layout_input: {
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
    alignItems: "center",
    marginVertical: 90,
    width: "75%",
  },
  layout_button: {
    width: "65%",
  },
});

export default Login;
