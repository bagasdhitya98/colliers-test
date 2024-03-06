import React, { useEffect } from "react";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { getData } from "./src/utils/services/storage";

import Login from "./src/pages/login";
import ListEmployee from "./src/pages/list_employee";
import CreateEmployee from "./src/pages/create_employee";
import DetailEmployee from "./src/pages/detail_employee";

axios.defaults.baseURL = "https://employee-api-kappa.vercel.app";

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await getData("token");
        if (!token) {
          navigation.navigate("Login");
        }
      } catch (error) {
        console.error("Error checking token:", error);
      }
    };
    checkToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListEmployee"
          component={ListEmployee}
          options={{
            headerTransparent: true,
            headerTintColor: "white",
            headerBackVisible: false,
            title: "List Employee",
          }}
        />
        <Stack.Screen name="CreateEmployee" component={CreateEmployee} />
        <Stack.Screen
          name="DetailEmployee"
          component={DetailEmployee}
          options={{
            headerTransparent: true,
            headerTintColor: "white",
            title: "Detail Employee",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
