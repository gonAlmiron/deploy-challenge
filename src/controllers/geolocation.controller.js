import logger from "../logs/logger";
import { locations } from "../persistence/memory/archivos";
import * as geolib from 'geolib';

export const geoLocationController = async (req, res) => {
    try {
        
        let locationsList = []
        let locationsContextList = []
        let centers = [] 

        // Filtro las locaciones de tipo Place:
        const filteredLocations = locations.filter(loc => loc.type === "place");
        locationsList.push(filteredLocations)

        // Filtro las locaciones de tipo Place dentro de los context:
        locations.forEach((item) => {
            if (item.context) {
            item.context.forEach((contextItem) => {
                if (contextItem.type === 'place') {
                    locationsList.push(contextItem);
                }
            });
            }
        });

        const allLocations = [...locationsList, ...locationsContextList].flat()

        // Separo las ubicaciones y nombres de cada locacion:
        centers = allLocations.map(loc => {
            return [loc.name, loc.center]
        })

        // Busco la Location más al sur:
        let southernmostLocation = null;
        let minLatitude = null;
        let southernmostLocationCenter = null;

        // Recorro el array tomando el nombre y la ubicacion y guardandolos en su variable
        for (let i = 0; i < centers.length; i++) {
            let latitude = parseFloat(centers[i][1].split(":")[0]);

            if (minLatitude === null || latitude < minLatitude) {
                southernmostLocation = centers[i][0];
                southernmostLocationCenter = centers[i][1];
                minLatitude = latitude;
            }
        }
        
        logger.info("La Location ubicada más al sur es: " + southernmostLocation);

        let southernPlace = southernmostLocationCenter;

        // Filtro las Location a menos de 50km de distancia:
        const [lat, lng] = southernPlace.split(":").map(Number);       

        const nearbyPlaces = centers.filter(([place, placeLatLng]) => {
            const [placeLat, placeLng] = placeLatLng.split(":").map(Number);
            const distance = geolib.getDistance({ latitude: lat, longitude: lng }, { latitude: placeLat, longitude: placeLng });
            return distance <= 50000;
          });

          // Traemos las locaciones cercanas, haciendo un .pop() para que no nos traiga la ultima que seria San Justo
          const nearbyPlacesNames = nearbyPlaces.map(([place, placeLatLng]) => place).pop();

        res.json({
            respuesta: `Las locaciones del tipo Place ubicadas a menos de 50km a la redonda de la Location ubicada más al sur son: \n ${nearbyPlacesNames}`
        })

    } catch (err) {
        logger.error(err.message);
        logger.error(err.stack)
    }
}
