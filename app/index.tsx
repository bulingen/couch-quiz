import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import "../global.css";

const Start = () => {
  return (
    <View className="p-2 flex flex-col items-center">
      <Text className="mb-4 mt-8">Välkommen faktis</Text>
      <Link href="/questions" className="bg-green-800 text-neutral-50 p-4">
        Ge mig frågor
      </Link>
      <StatusBar style="auto" />
    </View>
  );
};

export default Start;
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Start;
