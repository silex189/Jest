import { sumar, multiplicar, restar, dividir } from '../maths.js';


describe('maths test', () => {
    test('sum 2 + 2', () => {
        expect(sumar(2,2)).toBe(4);
    });
    test('multiply 2 * 2 ', () => {
        expect(multiplicar(2,2)).toBe(4);
    });
    test('subtract 4 - 2 ', () => {
        expect( restar(4,2)).toBe(2);
    });
    test('divide 8 / 2 ', () => {
        expect( dividir(8,2)).toBe(4);
    });
    test('sum 2 + 2 wrong', () => {
        expect( sumar(2,2)).not.toBe(5);
    });
    test('multiply 2 * 2 wrong', () => {
        expect( multiplicar(2,2)).not.toBe(5);
    })
});


