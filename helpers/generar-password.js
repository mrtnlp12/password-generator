const crearPassword = (pass = "", l = 0) => {
  let passwordCreada = "";
  for (let i = 0; i < l; i++) {
    passwordCreada += pass.charAt(Math.floor(Math.random() * pass.length));
  }

  return passwordCreada;
};

const generarPassword = (l, n, s) => {
  let numbers = "1234567890";
  let letters = "aAbBcCdDeEfFgGhHiIjJ";
  let symbols = "$%&=!/?¡*@.-_#";

  let pass = letters;

  n ? (pass += "") : (pass += numbers);
  s ? (pass += "") : (pass += symbols);

  return crearPassword(pass, l);
};

module.exports = {
  generarPassword,
};
