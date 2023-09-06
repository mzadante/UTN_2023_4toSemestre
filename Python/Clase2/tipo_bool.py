
# Bool contiene los valores de true o false
#Los tipos numericos, es false para el cero (0). true para los demas valores
valor = 0
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

# Tipo String -> False '' (cadena vacia) y true para los demas valores
valor = ''
resultado = bool(valor)
print(f'valor String: {valor}, resultado: {resultado}')

valor = 'Hola'
resultado = bool(valor)
print(f'valor String: {valor}, resultado: {resultado}')

# Tipo colecciones -> False para colecciones vacias y para lo demas True
valor = []
resultado = bool(valor)
print(f'valor coleccion: {valor}, resultado: {resultado}')

valor = [2, 3, 4]
resultado = bool(valor)
print(f'valor coleccion: {valor}, resultado: {resultado}')

# Tupla -> False para las demas True
valor = ()
resultado = bool(valor)
print(f'valor tupla: {valor}, resultado: {resultado}')

valor = (5,)
resultado = bool(valor)
print(f'valor tupla: {valor}, resultado: {resultado}')

# Diccionario -> False vacio y para lo demas True
valor = {}
resultado = bool(valor)
print(f'valor diccionario: {valor}, resultado: {resultado}')

valor = {'llave':'valor'}
resultado = bool(valor)
print(f'valor diccionario: {valor}, resultado: {resultado}')

# Sentencias de control con bool
if '':
    print('Regresa Verdadero')
else:
    print('Regresa False')

if 'hola':
    print('Regresa True')
else:
    print('Regresa False')


# Ciclos
variable = 17
while variable:
    print('Regresa True')
    break
else:
    print('Regresa False')