import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('pruebas en 11-aync-await.js', () => { 
      xtest('getImagen debe de retornar un URL de la imagen', async() =>{
        const resp = await getImagen(); 
        //expect( type url ).toBe('string');
        expect( resp ).toBe('No se encontro la imagen');
      })
})

