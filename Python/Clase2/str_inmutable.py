'''
String que no se pueden modificar
'''
#help(str.capitalize)
mensaje1 = 'hola mundo'
mensaje2 = mensaje1.capitalize()
print(f'Mensaje 1: {mensaje1}, id: {id(mensaje1)}')
print(f'Mensaje 2: {mensaje2}, id: {id(mensaje2)}')

mensaje1 += ' Adios'
#por esto es que son inmutables siempre guarda otro valor que le agreguemos no se reemplaza
print(f'Mensaje 1: {mensaje1}, id: {id(mensaje1)}')
#Agregando comas entre objetos en una lista
lista_cursos = ['Java', 'Python', 'Angular', 'Spring']
mensaje = ', '.join(lista_cursos)
print(f'Mensaje: {mensaje}')
#Separando con puntos
cadena = 'HolaMundo'
mensaje = '.'.join(cadena)
print(f'Mensaje: {mensaje}')
#join solo funciona con string no con numericos
diccionario = {'nombre': 'juan', 'apellido': 'Perez', 'edad': '18'}
llaves = '-'.join(diccionario.keys())
valores = '-'.join(diccionario.values())
print(f'Llaves: {llaves}, type: {type(llaves)}')
print(f'Valores {valores}, type: {type(valores)}')