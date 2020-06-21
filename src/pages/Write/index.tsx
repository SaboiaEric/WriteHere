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
  const [typed, setTyped] = useState<string>();
  const [print, setPrint] = useState<boolean>();

  function onChangeText(value: string) {
    setTyped(value);
    if(value !== undefined && value !== ""){
      setPrint(true);
    }
    else
      setPrint(false);
  }

  return (
    <ImageBackground
      source={require("../../assets/home-background.png")}
      style={styles.container}
    >
      <View style={styles.main}>
        <Text style={styles.title}>{typed}</Text>
      </View>

      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Insira o texto aqui."
          placeholderTextColor="black"
          value={typed}
          onChangeText={(text) => onChangeText(text)}
          maxLength={46}
          autoCapitalize="characters"
          autoCorrect={false}
        ></TextInput>
        {print ? <RectButton 
        style={styles.button}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="camera" color="#FFF" size={24} />
            </Text>
          </View>
        </RectButton> : null}
        
      </View>
    </ImageBackground>
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
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 20,
    backgroundColor: "rgba(86, 207, 225, 0.0)",
    borderWidth: 1,
    textAlign: "center",
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
    width: "100%",
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
