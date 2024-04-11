import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
  ScrollView,
  StatusBar,
  RefreshControl,
  FlatList,
  ActivityIndicator,
  Alert,
  Modal,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

function App() {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap"
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
