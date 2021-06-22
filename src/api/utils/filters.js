//Verifica que en un string solo haya numeros
const onlyNumbersOnStringFilter = (string) =>
  Array.from(string)
    .filter((word) => !isNaN(Number(word)))
    .join('');

//Analiza un array (nombrecompleto de Meucci) y extrae solo el primer nombre y apellido

const nameAndLastName = (stringName) => {
  const userArr = stringName.dataValues.nombrecompleto.split(' ');
  const userConverted = userArr
    .filter((name) => [0, 2].includes(userArr.indexOf(name)))
    .reverse()
    .map((e) => e.split('')[0].toUpperCase() + e.split('').splice(1).join('').toLowerCase())
    .join(' ')
    .toString();
  return userConverted;
};

module.exports = {
  onlyNumbersOnStringFilter,
  nameAndLastName,
};
