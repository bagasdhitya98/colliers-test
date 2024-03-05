import React from "react";
import axios from "axios";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/pages/login";
import ListEmployee from "./src/pages/list_employee";

axios.defaults.baseURL = "https://employee-api-kappa.vercel.app";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Menghilangkan header
        />
        <Stack.Screen name="ListEmployee" component={ListEmployee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
