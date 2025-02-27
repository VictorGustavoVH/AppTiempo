import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IoTControlScreen: React.FC = () => {
  const [windowState, setWindowState] = useState("Cerrada");
  const [lockState, setLockState] = useState("Activo");

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Header />
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Panel de Control IoT</Text>

            <View style={styles.sensorsContainer}>
              <Text style={styles.sensorText}>Temperatura: 22°C</Text>
              <Text style={styles.sensorText}>Humedad: 60%</Text>
              <Text style={styles.sensorText}>Lluvia: No</Text>
            </View>

            <Image source={require("../assets/ventana.jpg")} style={styles.windowImage} />
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setWindowState(windowState === "Abierta" ? "Cerrada" : "Abierta")}
              >
                <Text style={styles.buttonText}>Abrir/Cerrar ventana ({windowState})</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver Registros</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.button, styles.lockButton]}
                onPress={() => setLockState(lockState === "Activo" ? "Inactivo" : "Activo")}
              >
                <Text style={styles.buttonText}>Quitar Seguro ({lockState})</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  contentContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333333",
  },
  sensorsContainer: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sensorText: {
    fontSize: 18,
    marginVertical: 5,
    color: "#333333",
  },
  windowImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  lockButton: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default IoTControlScreen;