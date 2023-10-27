/*
//La palabra async no es necesaria en las funciones que ya son asyncronas igual proyectar una sincronia visual
async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 2000);
    });
}

async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            resolve(nombre);
            //reject('Hay un error');
        }, 2000);
    });
}

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve();
        }, 5000);
    });
}


//await hola('Carlos');  // esto es una mala sintaxis
//await solo es valido dentro de una funcion asyncrona
async function main(){
    let nombre = await hola('Ariel');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminamos el proceso');
    //main(); ESTO CREA UN BUCLE INFINITO
}
console.log('Empezamos el proceso');

main();

console.log('Esta va a ser la segunda instruccion');
*/
//Codigo en ingles
async function hello(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hello ' + name);
            resolve(name);
        }, 2000);
    });
}

async function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Blah blah blah...');
            resolve(name);
            //reject('There is an error');
        }, 2000);
    });
}

async function goodbye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Goodbye ' + name);
            resolve();
        }, 5000);
    });
}

//await hello('Carlos');  // This is incorrect syntax
//await is only valid inside an asynchronous function

async function main() {
    console.log('Code in English');
    console.log('Starting the process');
    let name = await hello('Ariel');
    await talk();
    await talk();
    await talk();
    await goodbye(name);
    console.log('We have finished the process');
    //main(); THIS CREATES AN INFINITE LOOP
}

//Codigo en ingles
console.log('Starting the process');

main();

console.log('This will be the second instruction');