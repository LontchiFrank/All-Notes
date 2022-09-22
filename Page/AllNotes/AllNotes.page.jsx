import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  Button,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import TextContainers from "../../Components/TextContainers/TextContainers.component";
function AllNotes() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={{ color: "white", fontSize: 40 }}>All notes</Text>
        <Text style={{ color: "#7d7d7d", fontSize: 15 }}>10 notes</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.icons}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Feather
              name="menu"
              size={25}
              color={"white"}
              style={{ margin: 10 }}
            />
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <AntDesign
              name="pdffile1"
              size={25}
              color={"white"}
              style={{ marginRight: 10, marginTop: 10 }}
            />

            <EvilIcons
              name="search"
              size={30}
              color={"white"}
              style={{ margin: 10 }}
            />

            <Feather
              name="more-vertical"
              size={25}
              color={"white"}
              style={{ marginTop: 10, marginLeft: 10 }}
            />
          </View>
        </View>
        <View style={{ height: "90%", backgroundColor: "black" }}>
          <TextContainers />
        </View>
      </View>
    </View>
  );
}

export default AllNotes;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  header: {
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "4px solid #7d7d7d",
  },
  body: {
    width: "100%",
    height: "70%",
    padding: 5,
    backgroundColor: "black",
  },
  icons: {
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
