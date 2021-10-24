# transistemas-celfar

Este repositorio tiene el objetivo de respaldar el código utilizado en el taller de [Testing de Transistemas](https://transistemas.org), en la clase de **automatización de pruebas de software**. 
El objetivo de este repositorio es sumamente educacional.

## 📃 CelFar especificaciones

https://nahual.github.io/qc-celfar/especificaciones.html

## 🤔 Qué necesitamos tener para ejecutar los tests?
Necesitamos las siguientes 2 cosas
- Google chrome
- node & npm -> [cómo instalar nodejs y npm](https://www.cursosgis.com/como-instalar-node-js-y-npm-en-4-pasos/)
- Descargar el repositorio -> pueden bajarlo con este [link](https://github.com/lthurr/transistemas-celfar/archive/refs/heads/main.zip)

### 📚 Versiones usadas
```
node --version
v15.14.0

npm --version
7.7.6
```

Una vez descargado el repositorio y teniendo instalado node y npm, vamos a abrir una consola

- Abre el menú de inicio
- Escribí `Ejecutar` y apreta Enter
- Se abrirá una nueva ventana. Escribe `cmd` y vuelve a apretar Enter
- Con la consola abierta, vamos a cambiarnos de directorio y vamos a ir a la carpeta donde nuestro repositorio está bajado:
  - Para cambiar de carpeta vamos a escribir `cd ruta-de-la-carpeta` y `ruta-de-la-carpeta` es el directorio donde está el repositorio que descargamos
  - (Suponiendo que el repositorio lo hemos descargado en la carpeta de **Descargas**) para ir a esa carpeta vamos a escribir en la ventana de la consola `cd C:\Users\tu-usuario\Downloads`
- Una vez allí, continuamos con el siguiente paso

## ⚙️ Cómo instalar las dependencias de nuestro proyecto transistemas-celfar?
Vamos a ejecutar en la consola estos 2 comandos, abajo hay una explicación de qué hacen
```
npm i -g npx
npm i
```

🤔 Explicación:<p>
`npm -i -g npx`, va a instalarnos un programa que vamos a necesitar para ejecutar nuestros tests<p>
`npm i`, va a instalarnos todas nuestras dependencias de nuestro repositorio, esas dependencias están declaradas [acá](https://github.com/lthurr/transistemas-celfar/blob/main/package.json)
  
Ahora, si llegamos hasta acá, podemos ejecutar nuestros casos de prueba


## 📝 Ejecutar los tests
```
$ npx wdio wdio.conf.js 
$ npx wdio wdio.conf.js -v 1
$ npx wdio wdio.conf.js -v 2
$ npx wdio wdio.conf.js -v 3
```

por defecto vamos a ejecutar los tests en `https://nahual.github.io/qc-celfar`<br>
`-v 1` va a ejecutar los tests en `https://nahual.github.io/qc-celfar/?v=1`<br>
`-v 2` va a ejecutar los tests en `https://nahual.github.io/qc-celfar/?v=2`
