import { isNull, isTrue, isFalse, isUndefined } from '../true';

describe('Probar resultados nullos', () => {
    test('null', () => {
        expect( isNull()).toBeNull();
    })
});


describe('Probar resultados verdaderos', () => {
    test('Verdadero', () => {
        expect( isTrue()).toBeTruthy();
    })
})


describe('Probar resultados falsos', () => {
    test('Falso', () => {
        expect( isFalse()).toBeFalsy();
    })
})

describe('Probar resultados undefined', () => {
    test('Undefined', () => {
        expect( isUndefined()).toBeUndefined();
    })
})

describe('Probar resultados no verdaderos', () => {
    test('not null', () => {
        expect( !isNull()).not.toBeNull();
    })
    test('not Verdadero', () => {
        expect( !isTrue()).not.toBeTruthy();
    })
    test('not Falso', () => {
        expect( !isFalse()).not.toBeFalsy()
    })
    test('not Undefined', () => {
        expect( !isUndefined()).not.toBeUndefined();
    })
})