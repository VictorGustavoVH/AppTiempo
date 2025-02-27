import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Dispositivo</Text>
      <TouchableOpacity>
        <Text style={styles.button}>Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#004080",
  },
  title: {
    fontSize: 18,
    color: "white",
  },
  button: {
    color: "white",
    fontSize: 16,
  },
});

export default Header;
