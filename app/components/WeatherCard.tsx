import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PropsClima {
  fecha: string;
  dia: string;
  tempMin: number;
  tempMax: number;
  probabilidadLluvia: number;
  descripcion: string;
}

const TarjetaClima = ({ fecha, dia, tempMin, tempMax, probabilidadLluvia, descripcion }: PropsClima) => {
  const obtenerColorFondo = () => {
    if (tempMax < 20) return "#ADD8E6"; // Azul
    if (tempMax >= 21 && tempMax <= 30) return "#FFD700"; // Amarillo
    return "#FF8C00"; // Naranja
  };

  return (
    <View style={[estilos.tarjeta, { backgroundColor: obtenerColorFondo() }]}>
      <Text style={estilos.fecha}>{dia}, {fecha}</Text>
      <Text>🌡️ Máx: {tempMax}°C / Mín: {tempMin}°C</Text>
      <Text>🌧️ Prob. de lluvia: {probabilidadLluvia}%</Text>
      <Text>🌤️ Estado: {descripcion}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  tarjeta: { padding: 15, margin: 10, borderRadius: 10, elevation: 3 },
  fecha: { fontWeight: "bold", fontSize: 18, marginBottom: 5 },
});

export default TarjetaClima;