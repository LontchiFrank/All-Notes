import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

function TextContainers() {
  return (
    <View style={styles.box}>
      <View style={styles.partOne}>
        <Text style={{ fontSize: 17, color: "white" }}>
          To sync your notes, allow the Contacts, Phone permission in settings.
        </Text>
      </View>
      <View
        style={{
          paddingRight: 20,
          paddingLeft: 20,
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <Pressable>
          <Text style={{ fontSize: 17, color: "#FD8972" }}>Not Now</Text>
        </Pressable>
        <Pressable style={{ marginLeft: 23 }}>
          <Text style={{ fontSize: 17, color: "#FD8972" }}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default TextContainers;

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: "35%",
    padding: 10,
    borderRadius: 25,
    backgroundColor: "#242424",
  },
  partOne: {
    width: "100%",
    height: "60%",
    borderRadius: 10,
    backgroundColor: "#242424",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
