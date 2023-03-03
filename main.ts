const multiplica = (n1: number, n2 : number) : void => {
    var resultado = n1 * n2;
    console.log(`Resultado da expressão: ${n1} * ${n2} = ${resultado}.`);
}

const hi = (name: string) : void => console.log(`Hi my friend ${name}, good luck! :)`);

multiplica(10, 20);

hi("Will");

