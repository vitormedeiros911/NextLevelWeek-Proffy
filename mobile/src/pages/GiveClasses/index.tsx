import React from "react";
import { View, ImageBackground, Text, Linking } from "react-native";

import giveClassesBgImg from "../../assets/images/give-classes-background.png";

import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

function GiveClasses() {

  function handleNavigation() {
    Linking.openURL("http://192.168.0.102:3000/give-classes");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImg}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigation}>
        <Text style={styles.okText}>Ir para a página de cadastro</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
