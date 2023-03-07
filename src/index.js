/** @format */

import { promptQuestion } from '#Lib/promptQuestion';

(async () => {
    //1ª Capturar la entrada del usuario por consola.
    const userAnswer = await promptQuestion('Introduce tu operacion: ');
    console.log(userAnswer);

    //2ª Validar la entrada y separar las partes de la misma en operandos y operador.

    //3ª Realizar la operación.

    //4ª Mostrar resultado por consola
})();
