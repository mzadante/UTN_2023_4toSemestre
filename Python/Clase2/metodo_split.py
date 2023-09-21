#metodo que es para separar o dividide cadenas
#help(str.split)

cursos = 'Java JavaScript Node Python Diseno'
lista_cursos = cursos.split()
print(f'Lista de cursos: {lista_cursos}')
print(type(lista_cursos))

cursos_separados_por_coma = 'Java,JavaScript,Node,Python,Diseno'
lista_cursos = cursos_separados_por_coma.split()
print(f'Lista de cursos: {lista_cursos}')
print(len(lista_cursos))
lista_cursos = cursos_separados_por_coma.split(',', 2)#con max delimeter
print(f'Lista de cursos: {lista_cursos}')
print(len(lista_cursos))