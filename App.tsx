import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {} from "react";
import { Text, View } from "react-native";
const Tab = createMaterialTopTabNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="SignUp" component={SignUp} />
          <Tab.Screen name="Profile" component={SignUp} />
          <Tab.Screen name="Ohter" component={SignUp} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

export function Login() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Login</Text>
    </View>
  );
}
export function SignUp() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>SignUp</Text>
    </View>
  );
}
