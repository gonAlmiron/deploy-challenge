import { getDataController } from '../controllers/data.controller'
import Chai from 'chai';

const { expect } = Chai;

describe('peticion de datos: neighborhoods y locality', () => {
  
    it('deberia devolver un string con la locality que tenga mayor cantidad de barrios cargados', async () => {
      const req = {};
      const res = {
        send: (result) => {
          expect(result).to.be.a('string');
          expect(result).to.include('La Locality con mayor cantidad de Neighborhoods cargados es:');
          
        },
      };
      await getDataController(req, res);
    });
    })

  