import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import "../global.css";

const Start = () => {
  return (
    <View style={styles.container}>
      <Text className="bg-slate-400">
        Open up App.js to start working on your app!
      </Text>
      <Pressable onPress={() => alert("You pressed a button.")}>
        <Text>Korven</Text>
      </Pressable>
      <Link href="/questions">Ge mig frågor</Link>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Start;
