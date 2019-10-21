import  { numbers } from '../numbers.js';

describe('Comparacion de numeros', () => {
    test('Mayor que', () => {
        expect( numbers(2,2)).toBeGreaterThan(3);
    });

    test('Mayor o igual que ', () => {
        expect( numbers(2, 2)).not.toBeGreaterThanOrEqual(6);
    });

    test('menor que', () => {
        expect( numbers(2,2)).toBeLessThan(5);
    })
    test('menor que o igual ', () => {
        expect( numbers(2,2)).not.toBeLessThanOrEqual(3);
    })

    test('Numero flotantes', () => {
        expect( numbers(0.2,0.2)).not.toBeCloseTo(0.2);
    })

})