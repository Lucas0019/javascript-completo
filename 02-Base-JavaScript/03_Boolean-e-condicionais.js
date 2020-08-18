//False ou true

//Condicionais If e Else
var possuiCarro = true

if (possuiCarro) {
    console.log('Possui carro');
} else {
    console.log('Não possui');
}

//Condicionais Else If.....else
var possuiGraduacao = true,
    possuiDoutorado = false;

if (possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado


//TRUTHY e FALSY

// Falsy
if (false)
    if (0) // ou -0
        if (NaN)
        if (null)
            if (undefined)
                if ('') // ou "" ou ``


                // Truthy
                    if (true)
                    if (1)
                        if (' ')
                            if ('andre')
                                if (-5)
                                    if ({})


                                    //OPERADOR LÓGICO DE NEGAÇÃO !
                                    //O operador !, nega uma operação booleana. Ou seja, !true é igual a false
                                    //Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy


                                    // Truthy
                                        if (!true) // false
                                            if (!1) // false
                                                if (!'') // true
                                                    if (!undefined) // true
                                                        if (!!' ') // true
                                                            if (!!'') // false