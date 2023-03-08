/** @format */

import { INVALID_INPUT } from '#Constants/messages';
import { OPERATORS } from '#Constants/operators';
import { promptQuestion } from '#Lib/promptQuestion';

(async () => {
    //1ª Capturar la entrada del usuario por consola.
    const userAnswer = await promptQuestion('Introduce tu operacion: ');
    console.log(userAnswer);

    //2ª Validar la entrada y separar las partes de la misma en operandos y operador.
    //Eliminar espacios al principio y final de la entrada del userAnswer
    const standarizeInput = userAnswer.trim();

    //ComprObar que no sea un string vacio
    if (standarizeInput === '') {
        console.log(INVALID_INPUT);
        return;
    }

    let operator;

    for (const allowedOperator of OPERATORS) {
        if (standarizeInput.includes(allowedOperator)) {
            if (
                operator ||
                standarizeInput.indexOf(allowedOperator) !==
                    standarizeInput.lastIndexOf(allowedOperator)
            ) {
                console.log(INVALID_INPUT);
                return;
            }
            operator = allowedOperator;
        }
    }

    if (!operator) {
        console.log(INVALID_INPUT);
        return;
    }

    //3ª Realizar la operación.

    //4ª Mostrar resultado por consola
})();
