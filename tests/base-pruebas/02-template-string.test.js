import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo deeb de retornar "Hola Soraya"', () => {
    const name = 'Soraya'; 
    const message = getSaludo( name );

    expect( message ).toBe(`Hola ${ name }`)
    });
})