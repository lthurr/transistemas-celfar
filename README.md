# transistemas-celfar

Este repositorio tiene el objetivo de respaldar el código utilizado en el taller de [Testing de Transistemas](https://transistemas.org), en la clase de **automatización de pruebas de software**. 
El objetivo de este repositorio es sumamente educacional.

## 📃 CelFar especificaciones

https://nahual.github.io/qc-celfar/especificaciones.html

## 📚 Versiones usadas
```
node --version
v15.14.0

npm --version
7.7.6
```

## ⚙️ Cómo instalar?
```
$ npm i -g npx
$ npm i
```

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
