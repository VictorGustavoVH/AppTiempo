import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const RegisterScreen = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [isPickerVisible, setPickerVisible] = useState(false); // Estado para controlar el Modal
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      console.log("Registro exitoso");
    } catch (error) {
      console.error("Error en registro:");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Nombre Completo" value={fullName} onChangeText={setFullName} />
        <TextInput style={styles.input} placeholder="Nombre de Usuario" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="Correo Electrónico" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Teléfono" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirmar Contraseña" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

        {/* Campo para seleccionar la pregunta de seguridad */}
        <TouchableOpacity style={styles.input} onPress={() => setPickerVisible(true)}>
          <Text>{securityQuestion || "Seleccione una pregunta"}</Text>
        </TouchableOpacity>

        {/* Modal para mostrar el Picker */}
        <Modal visible={isPickerVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Picker
                selectedValue={securityQuestion}
                onValueChange={(itemValue) => {
                  setSecurityQuestion(itemValue);
                  setPickerVisible(false); // Cierra el Modal después de seleccionar
                }}
              >
                <Picker.Item label="Seleccione una pregunta" value="" />
                <Picker.Item label="¿Cuál es el nombre de tu primera mascota?" value="mascota" />
                <Picker.Item label="¿Cuál es tu ciudad natal?" value="ciudad" />
              </Picker>
              <Button title="Cerrar" onPress={() => setPickerVisible(false)} />
            </View>
          </View>
        </Modal>

        <TextInput style={styles.input} placeholder="Respuesta Secreta" value={securityAnswer} onChangeText={setSecurityAnswer} />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Text>
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
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  link: {
    textAlign: "center",
    color: "blue",
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
});

export default RegisterScreen;