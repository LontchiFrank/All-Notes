import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AllNotes from "./Page/AllNotes/AllNotes.page";

export default function App() {
  return (
    <View style={styles.screen}>
      <AllNotes />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // padding: 70,
  },
});
