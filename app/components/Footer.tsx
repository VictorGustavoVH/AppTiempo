import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 Mi App - Todos los derechos reservados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#004080",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});

export default Footer;
