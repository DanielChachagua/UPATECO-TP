# Información

**Tema: HTML**

> **Martínez, Cruz Flavio Guillermo**
> **Daniel Chachagua**
> **Dante Alberto Martinez**
> **Gonzalez Gaston Ariel**
> 
> *Comisión CN*
>* Profesor: *

# Ejercicio 1, 2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="#" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value="Juan" required><br>

        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" value="Valdez" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="telefono">Número de teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required><br>

        <label for="mensaje">Mensaje:</label><br>
        <textarea id="mensaje" name="mensaje" rows="5" cols="30" placeholder="Escribe tu mensaje aquí, por favor, solo cosas buenas..."></textarea><br>

        <input type="submit" value="Enviar!">
    </form>
</body>
</html>
```

![[Pasted image 20230723141911.png]]

# Ejercicio 3

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1">
        <thead>
            <tr>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sábado</th>
                <th>Domingo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Trabajo</td>
                <td>Clases</td>
                <td>Deporte</td>
                <td>Reuniones</td>
                <td>Proyectos</td>
                <td>Tiempo libre</td>
                <td>Descanso</td>
            </tr>
            <tr>
                <td>Estudio</td>
                <td>Descanso</td>
                <td>Reuniones</td>
                <td>Trabajo</td>
                <td>Pasatiempos</td>
                <td>Descanso</td>
                <td>Descanso</td>
            </tr>
            <tr>
                <td>Proyectos</td>
                <td>Estudio</td>
                <td>Pasatiempos</td>
                <td>Descanso</td>
                <td>Vicios</td>
                <td>Descanso</td>
                <td>Descanso</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

![[Pasted image 20230723142017.png]]

# Ejercicio 4

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            border-collapse: collapse;
            border: 1px solid black; /* Agregamos un borde a toda la tabla */
        }

        th, td {
            border: 1px solid black;
            padding: 8px;
        }

        th.vertical-header {
            writing-mode: vertical-lr; /* Cabecera lateral con horas del día */
            text-align: center;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th class="horizontal-header"> Horario </th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sábado</th>
                <th>Domingo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="horizontal-header">8:00 - 16:00</th>
                <td>Trabajo</td>
                <td>Trabajo</td>
                <td>Trabajo</td>
                <td>Trabajo</td>
                <td>Trabajo</td>
                <td>Descanso</td>
                <td>Descanso</td>
            </tr>
            <tr>
                <th class="horizontal-header">16:00 - 17:30</th>
                <td>Ejercicio</td>
                <td>Futbol</td>
                <td>Ejercicio</td>
                <td>Futbol</td>
                <td>Ejercicio</td>
                <td>Tiempo libre</td>
                <td>Descanso</td>
            </tr>
            <tr>
                <th class="horizontal-header">17:30 - 22:00</th>
                <td>Estudio</td>
                <td>Estudio</td>
                <td>Estudio</td>
                <td>Estudio</td>
                <td>Estudio</td>
                <td>Juntada con amigos</td>
                <td>Descanso</td>
            </tr>
            <tr>
                <th class="horizontal-header">22:00 - 00:00</th>
                <td>Proyectos</td>
                <td>Proyectos</td>
                <td>Pasatiempos</td>
                <td>Pasatiempos</td>
                <td>Vicios</td>
                <td>Juntada con amigos</td>
                <td>Descanso</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

![[Pasted image 20230723142253.png]]

# Ejercicio 5

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Inicio</title>
</head>
<body>
    <!-- Encabezado -->
    <header>
        <img src="https://pm1.aminoapps.com/7216/34c52984562806b855f2ad766b1014f0cd849463r1-1000-1000v2_uhq.jpg" alt="Logo" width="100" height="100">
    </header>
    <!-- Sección 1 -->
    <section>
        <h2>Servicios de Google</h2>
        <ul>
            <li><a href="https://www.youtube.com/">YouTube</a></li>
            <li><a href="https://mail.google.com/">Gmail</a></li>
            <li><a href="https://drive.google.com/">Drive</a></li>
            <li><a href="https://translate.google.com/">Traductor</a></li>
            <li><a href="https://earth.google.com/web/">Google Earth</a></li>
            <li><a href="https://www.google.com/maps/">Maps</a></li>
        </ul>
    </section>

    <!-- Sección 2 -->
    <section>
        <h2>Contenido de la segunda sección</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br>
      <br>
    </section>

    <!-- Pie de página -->
    <footer>
        <form action="#" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value="Juan" required><br>

        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" value="Valdez" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="telefono">Número de teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required><br>

        <label for="mensaje">Mensaje:</label><br>
        <textarea id="mensaje" name="mensaje" rows="5" cols="30" placeholder="Escribe tu mensaje aquí, por favor, solo cosas buenas..."></textarea><br>

        <input type="submit" value="Enviar!">
    </form>
    </footer>
</body>
</html>
```

![[Pasted image 20230723142516.png]]

# Ejercicio 6

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nosotros</title>

</head>
<body>
    <!-- Encabezado -->
    <header>
        <img src="https://pm1.aminoapps.com/7216/34c52984562806b855f2ad766b1014f0cd849463r1-1000-1000v2_uhq.jpg" alt="Logo" width="100" height="100">
    </header>

    <!-- Contenido de la página "nosotros" -->
    <main>
        <img src="https://blog.hubspot.es/hs-fs/hubfs/media/queesseguridadinformatica.jpeg?width=610&height=406&name=queesseguridadinformatica.jpeg" alt="Nosotros" width="500" height="500">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper leo.
          Proin laoreet, velit eget egestas volutpat, nunc neque tincidunt dui, at eleifend purus arcu nec orci.
          Etiam nec sagittis odio. Pellentesque hendrerit suscipit ex, et pellentesque urna tincidunt nec.
          Nullam pharetra nisi eget sapien tempus, nec eleifend turpis feugiat.
          Quisque sodales orci nec metus scelerisque, in gravida libero luctus.</p>
    </main>
</body>
</html>
```

![[Pasted image 20230723142644.png]]

# Ejercicio 7

```html

```

# Ejercicio 8

```html

```

# Ejercicio 9

No se han encontrado errores de sintaxis ni de sematica.

# Ejercicio 10

1. `<!DOCTYPE html>`: Declara el tipo de documento como HTML5.
2. `<html>`: La etiqueta raíz que envuelve todo el contenido del documento.
3. `<head>`: Contiene información sobre el documento, como enlaces a estilos, metadatos y el título de la página.
4. `<title>`: Define el título de la página que se muestra en la pestaña del navegador.
5. `<body>`: Contiene todo el contenido visible de la página.
6. `<header>`: Encabezado de la página que contiene el logotipo y el título.
7. `<img>`: Inserta una imagen en la página. En este caso, se utiliza para mostrar el logotipo.
8. `<h1>`: Encabezado de nivel 1 que muestra el título principal de la página.
9. `<section>`: Define una sección de contenido en la página. Puede haber varias secciones en una página.
10. `<h2>`: Encabezado de nivel 2 que se utiliza para los títulos de sección.
11. `<ul>`: Lista desordenada que contiene elementos de lista.
12. `<li>`: Elemento de lista dentro de una lista desordenada.
13. `<a>`: Enlace o hipervínculo que redirige a otra página.
14. `<footer>`: Pie de página de la página que contiene el formulario de contacto.
15. `<form>`: Formulario que agrupa los campos de entrada y el botón de envío.
16. `<label>`: Etiqueta que etiqueta un campo de entrada para describir su propósito.
17. `<input>`: Campo de entrada donde los usuarios pueden ingresar datos.
18. `<textarea>`: Área de texto donde los usuarios pueden ingresar texto más extenso.
19. `<button>`: Botón interactivo que puede usarse para enviar el formulario.
20. `<style>`: Sección para definir reglas de estilo CSS en línea que afectan a elementos específicos.
21. `<table>`: Elemento para crear una tabla que contiene filas y columnas.
22. `<th>`: Encabezado de tabla, utilizado para las celdas de encabezado.
23. `<td>`: Celda de datos de tabla, utilizada para mostrar datos en la tabla.