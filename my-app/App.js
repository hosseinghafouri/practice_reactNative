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

function App() {
  const [modalVisable, setModalVisable] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={"lightblue"} />
      <Pressable
        style={styles.button}
        onPress={() => {
          Alert.alert("توجه", "آیا قبول دارید که تریدرید؟", [
            {
              text: "بله",
              onPress: () => {
                Alert.alert("بکیرم");
              },
            },
            {
              text: "خیر",
              onPress: () => {
                Alert.alert("آفرین گی");
              },
            },
          ]);
        }}
      >
        <Text style={styles.textButton}>Open Alert</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          setModalVisable(!modalVisable);
        }}
      >
        <Text style={styles.textButton}>Open M</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisable}
        onRequestClose={() => {
          Alert.alert;
          ("modal has been closed");
          setModalVisable(!modalVisable);
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderBlockColor: "white",
            backgroundColor: "#fcfc",
            padding: 5,
            margin: 5,
          }}
        >
          <Text>Hello</Text>
          <Image
            source={{ uri: "https://reactnative.dev/img/showcase/facebook.webp" }}
            style={{ width: 100, height: 100 }}
          ></Image>
                <Pressable
        style={styles.button}
        onPress={() => {
          setModalVisable(!modalVisable);
        }}
      >
        <Text style={styles.textButton}>بستن</Text>
      </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  text: {
    color: "#000",
    fontSize: 20,
    margin: 12,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    padding: 5,
    fontSize: 20,
    borderWidth: 3,
    borderRadius: 10,
  },
  textButton: {
    backgroundColor: "lightgreen",
    color: "#000",
    width: 100,
    height: 30,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
    margin: 12,
  },
  button: { elevation: 4 },
});

export default App;
