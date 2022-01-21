n1 = Number(prompt('Insira o primeiro valor:'));
n2 = Number(prompt('Insira o segundo valor:'));

function  comparaNumeros ( n1 ,  n2 )  {
	const  primeiraFrase  =  criaPrimeiraFrase ( n1 ,  n2 ) ;
	const  segundaFrase  =  criaSegundaFrase ( n1 ,  n2 ) ;

	retornar = `${primeiraFrase}  ${segundaFrase}`;
}

function  criaPrimeiraFrase ( n1 ,  n2 )  {
	let  primeiraFrase  =  `Os Números ${n1} e ${n2} ` ;
	let  simNao  =  'não' ;

	if  ( n1  ===  n2 )  {
		simNao  =  '' ;
	}

	retornar = ` ${primeiraFrase}  ${simNao} São iguais.`;
}

function  criaSegundaFrase ( n1 ,  n2 )  {
	const  soma  =  n1  +  n2 ;
	let  comparaDez  =  'menor' ;
	let  comparaVinte  =  'menor' ;

	if  ( soma  >  10 )  {
		comparaDez  =  'maior' ;
	}

	if  ( soma  >  20 )  {
		comparaVinte  =  'maior' ;
	}

	return  `Sua soma é ${soma} , que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.` ;
}

alert(comparaNumeros());