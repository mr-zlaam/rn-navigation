import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: RouteProp<RootStackParamList, "Login">;
};

const LoginScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>LoginScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          backgroundColor: "blue",
          margin: 10,
          padding: 15,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Go to home page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
