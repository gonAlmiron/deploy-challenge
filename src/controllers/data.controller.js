import logger from "../logs/logger";
import { locations } from "../persistence/memory/archivos";

export const getDataController = async (req, res) => {
    try {
        // Busco las locaciones que sean Neighborhoods, para saber que Locality cuenta con mayor cantidad de Neighborhoods
        const filteredLocations = locations.filter(loc => loc.type === "neighborhood");
        // Declaracion de variables para trabajar con metodos de Arrays
        let result  = "";
        let maxCount = 0;
        let localityName = '';
        // Cantidad de locaciones que sean barrios
        let neighborhoods = filteredLocations.length;
     
        logger.info(`Cantidad de barrios:  ${neighborhoods}`)

        //Ingreso al objeto "Context" de cada locación
        filteredLocations.forEach(loc => {
            loc.context.forEach(contexto => {

                // Buscamos la locality con mayor cantidad de neighborhoods
                if (neighborhoods > maxCount) {
                        maxCount = neighborhoods;
                        localityName = contexto.name;
                }

                if (contexto.type === "locality") {
                    result = `La Locality con mayor cantidad de Neighborhoods cargados es: ${localityName} \n Con un total de ${maxCount} barrios`    
                }
            });
          });
          res.json({
            respuesta: result
        })
        }
   catch (err) {
        logger.error(err.message)
        logger.error(err.stack)
    }

}
