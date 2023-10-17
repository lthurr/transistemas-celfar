const CelFarPage = require('../pageobjects/celfar.page');

describe('Aplicacion CelFar', () => {
    let examples;

    it('Título de la página', async () => {
        await CelFarPage.open();

        await expect(browser).toHaveTitleContaining("CelFar");
    });

    it('Título y descripción de la aplicación', async () => {
        await CelFarPage.open();

        await expect(await CelFarPage.title.getText()).toBe("CelFar");
        await expect(await CelFarPage.description.getText()).toBe("Conversor de temperaturas entre grados Celsius y Fahrenheit");
    });

    it('Links en la descripción de la aplicación', async () => {
        await CelFarPage.open();

        await expect(await CelFarPage.getLinksInDescription())
            .toStrictEqual(["http://es.wikipedia.org/wiki/Grado_Celsius", "http://es.wikipedia.org/wiki/Grado_Fahrenheit"]);
    });

    describe('Estado Inicial', () => {
        it('Campo numérico debería estar vacío y mencionar \'pendiente de cálculo\'', async () => {
            await CelFarPage.open();

            await expect(await CelFarPage.input.getText()).toBe('');
            await expect(await CelFarPage.btnSubmit.getAttribute('value')).toBe('convertir!');
            await expect(await CelFarPage.output.getText()).toBe('Pendiente de cálculo...');
        });
    });

    describe('(Caso normal) ', () => {
        examples = [
            {'input': "999999", 'output': "1800030.2"},
            {'input': "273", 'output': "523.4"},
            {'input': "10", 'output': "50"},
            {'input': "1", 'output': "33.8"},
            {'input': "0", 'output': "32"},
            {'input': "-1", 'output': "30.2"},
            {'input': "-10", 'output': "14"},
            {'input': "-273", 'output': "-459.4"},
        ]

        examples.forEach(({input, output }) => {
            it(`El valor \'${input}\' debería ser convertido a \'${output}\' F`, async () => {
                await CelFarPage.open();
                await CelFarPage.convert(input);

                await expect(await CelFarPage.output.getText()).toBe(output);
            });
        });
    });

    describe('(Valor menor a -273)', () => {
        it('Deberia informar que está bajo el cero absoluto', async () => {
            await CelFarPage.open();
            await CelFarPage.convert("-274");

            await expect(await CelFarPage.output.getText()).toBe("El valor ingresado está debajo del 0 absoluto");
            await expect(await CelFarPage.getLinksInOutput()).toStrictEqual(["http://es.wikipedia.org/wiki/Cero_absoluto"]);
        });
    });

    describe('(Valores no numericos)', () => {
        examples = [
            ' ', '"0"', '0,0', 'hola'
        ]
        examples.forEach((input) => {
            it(`Deberia informar que el valor ingresado \'${input}\' no es un valor numerico`, async () => {
                await CelFarPage.open();
                await CelFarPage.convert(input);

                await expect(await CelFarPage.output.getText()).toBe("El valor ingresado no es un número (recuerde que los decimales deben expresarse con '.' y no con ',')");
            });
        });
    });

    describe('(Valores con más de 6 digitos)', () => {
        examples = [
            '1234567', '-123.4567',
        ]
        examples.forEach((input) => {
            it(`Deberia informar que el valor ingresado \'${input}\' es muy largo`, async () => {
                await CelFarPage.open();
                await CelFarPage.convert(input)

                await expect(await CelFarPage.output.getText()).toBe("El valor ingresado es muy largo");
            });
        });
    });
});


