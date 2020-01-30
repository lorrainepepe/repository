//antes da execução, instalar o lodash no terminal com: npm i lodash

const _ = require('lodash')
setInterval(() => console.log(_.random(0, 1000)), 2000)

//também é possível instalar a dependência nodemon para que os códigos salvos sejam executados automaticamente.
//para instalar: npm i -g nodemon
//para executar:
//cd node
//nodemon usandoModulosTerceiros.js
