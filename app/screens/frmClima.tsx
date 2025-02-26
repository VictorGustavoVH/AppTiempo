import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import TarjetaClima from "../components/WeatherCard";
import { obtenerPronosticoClima } from "../service/weatherService";

interface Pronostico {
  fecha: string;
  dia: string;
  tempMin: number;
  tempMax: number;
  probabilidadLluvia: number;
  descripcion: string;
}

export default function FrmClima() {
  const [datosClima, setDatosClima] = useState<Pronostico[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    const obtenerClima = async () => {
      const datos = await obtenerPronosticoClima("Ciudad de México");
      if (datos) {
        const datosFormateados = datos.dias.map((dia: any) => ({
          fecha: dia.fechahora,
          dia: new Date(dia.fechahora).toLocaleDateString("es-ES", { weekday: "long" }),
          tempMin: dia.tempmin,
          tempMax: dia.tempmax,
          probabilidadLluvia: dia.probprecip,
          descripcion: dia.condiciones,
        }));
        setDatosClima(datosFormateados);
      }
      setCargando(false);
    };

    obtenerClima();
  }, []);

  if (cargando) return <ActivityIndicator size="large" color="#0000ff" style={estilos.cargador} />;

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Pronóstico del Clima (5 días)</Text>
      <FlatList
        data={datosClima}
        keyExtractor={(item) => item.fecha}
        renderItem={({ item }) => (
          <TarjetaClima
            fecha={item.fecha}
            dia={item.dia}
            tempMin={item.tempMin}
            tempMax={item.tempMax}
            probabilidadLluvia={item.probabilidadLluvia}
            descripcion={item.descripcion}
          />
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  cargador: { flex: 1, justifyContent: "center" },
});