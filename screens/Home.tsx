import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {} from "react";
import { View, Text, TextInput } from "react-native";

type RootStackParamList = {
  Login: undefined;
  Home: {
    name: string;
    age: number;
  };
};
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

function HomeScreen({ route }: Props) {
  const { name, age } = route.params;
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>HomeScreen</Text>
        <TextInput
          placeholder="Search..."
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            margin: 20,
            borderWidth: 1,

            width: "80%",
            borderRadius: 5,
          }}
        />
        <Text>
          {name} {age} hello
        </Text>
      </View>
    </>
  );
}

export default HomeScreen;
