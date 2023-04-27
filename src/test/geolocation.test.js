import Chai from 'chai';
import { geoLocationController } from '../controllers/geolocation.controller';

const { expect, should } = Chai;


describe('petición de localidades cercanas', () => {
  
    it('deberia retornar los Places cercanos al place ubicado más al sur', async () => {
      const req = {};
      const res = {    
        send: (result) => { 
          expect(result).to.be.a('string');
          expect(result).to.include('Las locaciones del tipo Place ubicadas a menos de 50km a la redonda de la Location ubicada más al sur son:');

        },
      };
      await geoLocationController(req, res);
    });
})