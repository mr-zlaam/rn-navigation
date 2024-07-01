import { useEffect, useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
interface ListType {
  id: number;
  title: string;
  body: string;
}
function App() {
  const [post, setPost] = useState<null | ListType[]>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const result = await fetch(url).then((data) => data.json());
        setPost(result);
        console.log(post);
        return result;
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView>
      <View>
        {post?.length !== 0 ? (
          <FlatList
            data={post}
            renderItem={({ item }) => (
              <ScrollView
                key={item.id}
                style={{ padding: 20, backgroundColor: "#eee", margin: 10 }}
              >
                <Text>{item.id}</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.title}
                </Text>
                <Text>{item.body}</Text>
              </ScrollView>
            )}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

export default App;
