let isAtivo = false;
    console.log(isAtivo);

    isAtivo = true;
        console.log(isAtivo);

isAtivo = 1
    console.log(!!isAtivo); 
// VERDADEIRO = TRUE    
    console.log('os verdadeiros ...');
    console.log(!!3)
    console.log(!!-1);
    console.log(!!' ');
    console.log(!!'Texto');
    console.log(!![]);
    console.log(!!{});
    console.log(!!Infinity);
    console.log(!!(isAtivo = true));

// FALSO = FALSE

    console.log('os falsos...');
    console.log(!!0);
    console.log(!!'');
    console.log(!!null);
    console.log(!!NaN)
    console.log(!!undefined);
    console.log(!!(isAtivo = false));

    console.log('pra finalizar... ');
    console.log(!!(''|| null || 0 || ' '));

    let nome = ''

    console.log(nome || 'Desconhecido');
