import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const RecuperarContrasenaScreen = () => {
  const [email, setEmail] = useState("");
  const [respuestaSecreta, setRespuestaSecreta] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("Seleccione una pregunta");

  const preguntas = [
    "¿Cuál es el nombre de tu primera mascota?",
    "¿En qué ciudad naciste?",
    "¿Cuál es el nombre de tu mejor amigo de la infancia?",
    "¿Cuál fue tu primer coche?",
    "¿Cuál es tu película favorita?"
  ];

  const handleEnviarSolicitud = () => {
    if (!email) {
      Alert.alert("Error", "Por favor ingresa tu correo electrónico");
      return;
    }
    
    if (selectedQuestion === "Seleccione una pregunta") {
      Alert.alert("Error", "Por favor selecciona una pregunta secreta");
      return;
    }
    
    if (!respuestaSecreta) {
      Alert.alert("Error", "Por favor ingresa tu respuesta secreta");
      return;
    }
    
    Alert.alert(
      "Solicitud Enviada", 
      "Se ha enviado un enlace a tu correo para restablecer tu contraseña"
    );
  };

  // Adding proper type annotation for the pregunta parameter
  const handleSeleccionarPregunta = (pregunta: string) => {
    setSelectedQuestion(pregunta);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={styles.dropdownContainer}>
          <TouchableOpacity 
            style={styles.dropdownSelector} 
            onPress={toggleDropdown}
          >
            <Text>{selectedQuestion}</Text>
            <FontAwesome name={showDropdown ? "chevron-up" : "chevron-down"} size={16} color="gray" />
          </TouchableOpacity>
          
          {showDropdown && (
            <View style={styles.dropdownMenu}>
              {preguntas.map((pregunta, index) => (
                <TouchableOpacity 
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => handleSeleccionarPregunta(pregunta)}
                >
                  <Text>{pregunta}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        
        <View style={styles.inputContainer}>
          <FontAwesome name="question-circle" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu respuesta secreta"
            value={respuestaSecreta}
            onChangeText={setRespuestaSecreta}
          />
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleEnviarSolicitud}>
          <Text style={styles.buttonText}>Enviar Solicitud</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  formContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  link: {
    textAlign: "center",
    color: "blue",
    marginTop: 15,
  },
  dropdownContainer: {
    width: "100%",
    marginBottom: 10,
    zIndex: 1000,
  },
  dropdownSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  dropdownMenu: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
    marginTop: 2,
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  }
});

export default RecuperarContrasenaScreen;