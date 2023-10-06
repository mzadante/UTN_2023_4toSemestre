/*
function soyAsincrona(miCallback){
    setTimeout(function() {
        console.log('Soy FUNCION Asincrona');
        miCallback();
    }, 5000);
    
}
console.log('Iniciando proceso...');

soyAsincrona(function(){
    console.log('Terminando proceso...');
});
*/
function hola(nombre, miCallback){
    setTimeout(function() {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 5000);
}
console.log('Iniciando proceso...');
/*
hola('Carlos', function(){});
adios('Carlos', function(){});
*/
hola('Carlos', function(nombre){
    adios(nombre, function(){
    console.log('Terminando proceso...');
    });
});

function adios(nombre, otroCallback){
    setTimeout(function() {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}




