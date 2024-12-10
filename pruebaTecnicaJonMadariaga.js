/* Crea una funcion que reciba un numero como parametro de entrada y te devuelva un entero que represente 
el número de agujeros que contiene el parametro de entrada:

entrada: 68
salida: 3 */

const agujeros = (num) => {
  const numToArray = num.toString().split("").map(Number);

  let agujerosCountArr = [];
  let count = 0;

  const agujerosPorNumero = [
    { numero: 0, agujeros: 1 },
    { numero: 1, agujeros: 0 },
    { numero: 2, agujeros: 0 },
    { numero: 3, agujeros: 0 },
    { numero: 4, agujeros: 1 },
    { numero: 5, agujeros: 0 },
    { numero: 6, agujeros: 1 },
    { numero: 7, agujeros: 0 },
    { numero: 8, agujeros: 2 },
    { numero: 9, agujeros: 1 },
  ];

  for (let i = 0; i < numToArray.length; i++) {
    let numerosFiltrados = agujerosPorNumero.filter(
      (number) => number.numero === numToArray[i]
    );

    agujerosCountArr.push(numerosFiltrados[0]);
  }

  agujerosCountArr.forEach((obj) => {
    count += obj.agujeros;
  });

  return count;
};

console.log(agujeros(888726));
