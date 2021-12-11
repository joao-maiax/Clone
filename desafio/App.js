import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <View
          style={{
            width: "100%",
            height: 30,
            marginTop:20,
            backgroundColor: "aquamarine",
            alignSelf: "flex-start",
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "orange",
            marginBottom: 160,
          }}
        />
        <View
          style={{
            width: 170,
            height: 30,
            backgroundColor: "orange",
            marginBottom: 120,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <View
          style={{ width: "50%", height: 60, backgroundColor: "fuchsia" }}
        />
        <View
          style={{
            width: "50%",
            height: 60,
            backgroundColor: "cornflowerblue",
          }}
        />
        <View
          style={{ width: "100%", height: 10, backgroundColor: "aquamarine" }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            marginBottom: 30,
            backgroundColor: "orange",
          }}
        />
        <View style={{ width: 100, height: 100, backgroundColor: "orange" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "orange" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "orange" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "orange" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "orange" }} />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{
            width: "100%",
            height: 70,
            backgroundColor: "cornflowerblue",
          }}
        />
      </View>
    </>
  );
}
