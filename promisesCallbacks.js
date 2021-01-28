//Nivel 1

/* Ejercicio1 - Crear una function que retorni una Promise que invoqui la funcion resolve() o bé 
reject() que rep. Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge 
diferent en cada cas.
*/

let promise = new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y 
    // reject(...) cuando falla.
    let operacion = 5 + 1;
    if (operacion == 6) {
        resolve("Resolve: ¡Éxito!"); // ¡Todo salió bien!
    } else {
        reject("Reject: ¡Error!"); // Todo salió mal.
    }
});


promise.then((message) => {
    // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
    // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
    console.log("Correcto: " + message);
}).catch((message) => {
    // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
    // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
    console.log("No es correcto: " + message);
});

/* Ejercicio2 - Crear una arrow function que, rebent un paràmetre i una function callback, 
li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre.
*/

let parametroArrow = (parametro, callback) => {
    let sum = parametro * 2;
    callback(sum);
}

function resultCallback(num) {
    if (num > 10) {
        console.log("Es mayor que 10");
    } else {
        console.log("Es menor que 10");
    }
}


parametroArrow(2, resultCallback)

//Nivel 2

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

/* Ejercicio1 - Donats els objectes employees i salaries, creu una arrow function getEmpleado 
que retorni una Promise efectuant la cerca en l'objecte pel seu id.
*/

let getEmpleado = new Promise((resolve, reject) => {


    let idEmpleado = 1;
    let idSalario = 1;

    if (idEmpleado != "" && idSalario != "") {
        resolve([employees.filter(empleado => empleado.id === idEmpleado), salaries.filter(empleado => empleado.id === idSalario)]);
    } else {
        reject("El valor idEmpleado o idSalario es Nulo");
    }

});

getEmpleado.then(values => {
    console.log(values);
}).catch((err) => {
    console.log("No es correcto: getEmpleado " + err);
});;


/* Ejercicio2 - Creu una altra arrow function getSalario que rebi com a paràmetre un objecte employee
i retorni el seu salari.
*/

//Hacemos un map para recoger todos los objetos de employees
let empleado = employees.map(empleados => empleados);

// Recogemos 1 objeto de employee para pasarlo por parámetro a la función getSalario()
let objetoEmpleado = empleado[2].id;


let getSalario = (objetoEmpleado) => {
    return new Promise((resolve, reject) => {

        if (objetoEmpleado != undefined) {
            resolve([salaries.filter(salario => salario.id === objetoEmpleado)]);
        } else {
            reject("El valor objetoEmpleado no está definido");
        }

    });

};

getSalario(objetoEmpleado).then(values => {
    console.log(values);
}).catch((err) => {
    console.log("No es correcto: getSalario" + err);
});

/* Ejercicio3 - Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució 
de les dues promises.
*/

let promesasAnidadas = Promise.all([getEmpleado, getSalario(objetoEmpleado)]);

promesasAnidadas.then(function (data) {
    console.log('Promesas anidadas:');
    data.forEach(function (values) {
        console.log(values);
    });
}).catch(function (err) {
    console.error('Error: ', err);
});

//Nivel 3

/* Ejercicio1 - Fixi un element catch a la invocació de la fase anterior que capturi
qualsevol error i l'imprimeixi per consola.
*/

// En la linea 163 añadimos el catch para capturar cualquier error en las promesas.
/* 
Para comprobar que funciona y se muestra, se tiene que igualar la variable let idEmpleado = 1; o let idSalario = 1; a nulo "" 
y se capturará y mostrará el error imprimiendo por consola el error que devuelva la promesa getEmpleado
*/

