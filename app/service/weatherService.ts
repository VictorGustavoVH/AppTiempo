import axios from "axios";

const CLAVE_API = "B7S62RZ636NLMHTE988SCETSF"; 
const URL_BASE = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export const obtenerPronosticoClima = async (ciudad: string) => {
  try {
    const respuesta = await axios.get(`${URL_BASE}/${ciudad}`, {
      params: {
        key: CLAVE_API,
        unitGroup: "metric", 
        include: "days", 
        lang: "es"
      }
    });

    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener el clima:", error);
    return null;
  }
};