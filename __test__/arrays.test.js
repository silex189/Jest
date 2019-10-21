import { arrayFruits, arrayColors } from '../arrays';

describe('Comprobaremos que existe un elemento', () => {
    test('contiene una banana', () => {
        expect( arrayFruits()).toContain('banana');
    })
    test('no contiene un platano', () => {
        expect( arrayFruits()).not.toContain('platano');
    })

    test('Comprobar longitud de un array', () => {
        expect( arrayFruits()).toHaveLength(6);
    })

    test('Comprobar size de un array no coincide', () => {
        expect( arrayFruits()).not.toHaveLength(5);
    })

    test('Comprobaremos que existe un color', () => {
        expect( arrayColors()).toContain('azul')
    })
})