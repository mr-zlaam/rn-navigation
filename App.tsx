import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";

type RootStackParamList = {
  Login: undefined;
  Home: {
    name: string;
    age: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "skyblue",
          },

          headerTitleStyle: { fontSize: 24 },
          animation: "fade_from_bottom",
          statusBarColor: "black",
          statusBarStyle: "inverted",
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
