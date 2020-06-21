import React, { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Write = () => {
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate("Points", {
      uf,
      city,
    });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS ? "padding" : undefined}
    >
      <ImageBackground
        source={require("../../assets/home-background.png")}
        style={styles.container}
      >
        <View style={styles.main}></View>

        <View style={styles.footer}>
          <Text style={styles.title}>Let's try</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45,
    textAlign: "center",
  },

  main: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },

  imageLogo: {
    paddingLeft: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#322153",
    fontSize: 27,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 64,
    textAlign: "center",
    justifyContent: "center",
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#56cfe1",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "left",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    marginLeft: 50,
  },
});

export default Write;
