import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function loading() {
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={style.text}>Getting the weather~</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA"
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30
  }
});
