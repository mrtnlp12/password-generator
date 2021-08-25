require("colors");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const clipboardy = require("clipboardy");
const argv = yargs(hideBin(process.argv));
const fs = require("fs");

const { generarPassword } = require("./helpers/generar-password");

let textoDelArchivo = "";

const { noNumbers, noSymbols, l } = argv
  .option("length", {
    alias: "l",
    type: "number",
    default: 8,
    describe: "Longitud del password que se generara",
  })
  .option("noNumbers", {
    type: "boolean",
    default: false,
    describe: "No se usaran numeros al generar el password",
  })
  .option("noSymbols", {
    type: "boolean",
    default: false,
    describe: "No se usaran simbolos al generar el password",
  }).argv;

const password = generarPassword(l, noNumbers, noSymbols);

console.clear();

clipboardy.writeSync(password);

if (fs.existsSync("salida/password.txt")) {
  textoDelArchivo = fs.readFileSync("salida/password.txt", {
    encoding: "utf-8",
  });
  textoDelArchivo += "\n" + password;
  fs.writeFileSync("salida/password.txt", textoDelArchivo);
} else {
  fs.writeFileSync("salida/password.txt", password);
}

console.log(`${"Password generada:".green} ${password.cyan}`);
