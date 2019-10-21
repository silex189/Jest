import { getCharacter } from '../snapshot';
import rick from '../rick.json';


describe('Es hora de las instantaneas', () => {

    test('snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    })

    /* test('siempre fallara la instantanea', () => {
        
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20 ),
        }

        expect(user).toMatchSnapshot();
    }) */

    test('Tenemos una excepcion dentro del codigo', () => {
        
        const user = {
            id: Math.floor(Math.random() * 20 ),
            name: "Oscar Barajas",
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    })
})