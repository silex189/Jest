const TestRunner = require("jest-runner")

describe('Comparadores comunes', () => {
    const user = {
        name: "oscar",
        lastname: "barajas"
    }
    const user2 = {
        name: "oscar",
        lastname: "barajas"
    }
    const user3 = {
        name: "antonio",
        lastname: "madrid"
    }

    test('igualdad elementos ', () => {
        expect(user).toEqual(user2);
    });
    test('no son exactamente iguales ', () => {
        expect(user).not.toEqual(user3);
    });


})