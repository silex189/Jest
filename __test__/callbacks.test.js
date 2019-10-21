import { callbackHell } from '../callbacks';

describe('Probamos un Callback', () => {
    test('Callback', done => {
        function otherCallback(data) {
            expect(data).toBe('Hola JavaScript');
            done();
        }
        callbackHell(otherCallback);
    })
})