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

// gör router-grejen CHECK
// sen en startsida. CHECK
// klicka "ge mig frågor" CHECK
// gå till en sida CHECK
// generera frågor CHECK

// KATEGORIER
// underhållning
// vetenskap
// kultur
// geografi
// historia
// sport & fritid

// slumpa frågor
// spara vilka frågor som tagits. ta inte nån igen, förrän alla har körts
// vill kunna ta vanliga frågor och barnfrågor
// kanske använda fontawesome för ikoner. kolla andra projektet för det
