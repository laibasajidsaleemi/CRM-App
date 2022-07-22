import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Client from "./screens/Client";
import Detail from "./screens/Detail";
import Content from "./screens/Content";
import Login from "./screens/Login";
import Menu from "./screens/Menu";
import Followup from "./screens/Followup";
import Account from "./screens/Account";
import { AppState } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    AppState.currentState == "active" && (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Client"
            component={Client}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Content"
            component={Content}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Followup"
            component={Followup}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
