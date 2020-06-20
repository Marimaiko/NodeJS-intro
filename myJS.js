let rs=require('readline-sync');

let mascara =rs.question('Você está usando máscaara quando sai de casa?');
let maos= rs.question('Você está lavando as mãos frequentemente?');

if(mascara == 'sim')
{
    if(maos=='sim')
    {
        console.log('Você está prevenido')
    }
    else
    {
        console.log('Você deve levar as mãos!')
    }
}

else 
{
    if(maos=='sim')
    {
        console.log('Não esqueça a máscara!')
    }
    else
    {
        console.log('Você tá correndo risco de vida')
    }
}

//node myJS.js