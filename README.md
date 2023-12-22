# 02 Bases de Node

Correr en Dev

```
npm run dev
```

# Temas puntuales de la sección

## Loggers y su necesidad:
Loggers: En desarrollo de software, un logger es una herramienta que registra mensajes durante la ejecución de un programa. Estos mensajes pueden incluir información sobre eventos, errores, warnings, y otras operaciones relevantes. Los loggers son esenciales para el diagnóstico y la depuración de aplicaciones, ya que proporcionan una traza de lo que sucede durante la ejecución.

Necesidad de Loggers: Los loggers son cruciales para entender el comportamiento y el rendimiento de una aplicación. Ayudan a identificar problemas, rastrear la ejecución del código, y proporcionar información valiosa para la resolución de errores. Además, son útiles en entornos de producción para monitorizar la salud de la aplicación y diagnosticar problemas en tiempo real.

## Winston:
Winston: Winston es una biblioteca para registro de eventos (logging) en Node.js. Es extremadamente flexible y configurable, lo que permite personalizar la salida de los registros, niveles de registro, y destinos de registro. Winston es ampliamente utilizado en proyectos Node.js para gestionar y registrar eventos.

## Configuraciones básicas y adaptador:
Configuraciones básicas: Configurar un logger con Winston implica especificar los detalles de cómo debe comportarse el logger. Esto puede incluir la elección del formato del registro, la configuración de niveles de registro (info, warn, error, etc.), y la configuración de los destinos de registro (consola, archivos, bases de datos, etc.).

Adaptador: En el contexto de Winston, un adaptador se refiere a un transporte (transport) que maneja la salida de los registros. Los adaptadores pueden enviar registros a diferentes destinos como la consola, archivos, bases de datos, o servicios de terceros.

## TypeScript:
TypeScript: TypeScript es un superset de JavaScript que añade tipado estático opcional y otros features a la sintaxis de JavaScript. Permite definir tipos de datos para variables, funciones y otros elementos del código, lo que facilita la detección de errores durante la fase de desarrollo.

## Configuración de TypeScript con Node:
Configuración de TypeScript con Node: Para utilizar TypeScript en un proyecto Node.js, se necesita un archivo de configuración tsconfig.json que especifique cómo TypeScript debe compilar el código. Esto puede incluir la configuración de la versión de ECMAScript a la que se debe compilar, la ubicación de los archivos fuente y de salida, entre otros.

## Migración de proyecto:
Migración de proyecto: La migración de proyecto se refiere al proceso de trasladar un proyecto desde una versión anterior a una nueva, o de cambiar tecnologías, como migrar de JavaScript a TypeScript. Esto puede implicar modificar el código existente, actualizar dependencias, y ajustar la configuración para adaptarse a la nueva versión o tecnología.

## TSC:
TSC (TypeScript Compiler): TSC es la herramienta de línea de comandos que se utiliza para compilar proyectos TypeScript. Se ejecuta el comando tsc para compilar los archivos TypeScript y generar archivos JavaScript que puedan ser ejecutados por Node.js.

## ts-node + nodemon:
ts-node + nodemon: ts-node es un ejecutor TypeScript para Node.js que elimina la necesidad de compilar antes de ejecutar el código. nodemon es una herramienta que observa cambios en archivos y reinicia automáticamente la aplicación cuando detecta modificaciones. Combinar ts-node y nodemon facilita el desarrollo en entornos TypeScript, ya que permite reiniciar automáticamente la aplicación en respuesta a cambios en el código fuente sin necesidad de recompilación manual.