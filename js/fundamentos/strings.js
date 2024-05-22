const escola = "Cod3r";

console.log(escola.length);
console.log(escola.charAt(4)); // FUNÇÃO PARA PEGAR UM DETERMINADO CARACTER DA STRING
console.log(escola.charCodeAt(3)); // CODIGO DO CARACTER
console.log(escola.indexOf("3"));
console.log(escola.substring(1));
console.log(escola.substring(0, 3)); // CHAMANDO CARACTERES PASSANDO O INDICE INICIAL E O FINAL
console.log(escola.substring(0, 5));
console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!"); //CONCATENAÇÃO
console.log(escola.replace(3, "e")); // OU USAR A FORMA SEGUINTE

console.log(escola.replace(/\d/, "e")); // ESSA É UMA EXPRESSÃO REGULAR QUE PERMITE FAZER A TROCA DE LETRAS OU NÚMEROS NAS PALAVRAS

console.log(escola.replace(/\d/g, "e")); // ESSA É UMA EXPRESSÃO REGULAR QUE PERMITE FAZER A TROCA DE LETRAS OU NÚMEROS NAS PALAVRAS, SE COLOCAR O 'G', ELE MUDA A PALAVRA INTEIRA POIS SE TORNA GLOBAL

console.log("Ana,Maria,Pedro".split(",")); //ISTO É UM ARRAY
