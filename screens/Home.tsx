import {} from "react";
import { View, Text, TextInput } from "react-native";

function HomeScreen() {
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
      </View>
    </>
  );
}

export default HomeScreen;
