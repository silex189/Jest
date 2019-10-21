describe('Comprobar cadenas de texto', () => {

    const text = 'Un bonito texto';

    test('debe contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    })

    test('No contiene el siguiente texto', () => {
        expect(text).not.toMatch(/[^t]exto/);
    })


    test('Comprobar el size de un texto', () => {
        expect(text).toHaveLength(15);
    })
})