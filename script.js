// KATA 1
// Neste exercício, você irá pegar a sentença(string) abaixo e mostra-la no HTML, mas não dá for que está escrita.

// Lembre dos conceitos de DOM apresentado na semana anterior

let stringKata1 = "O,rato,roeu,a,roupa,do,Rei,de,Roma."

// Selecione o elemento do html onde iremos adicionar a string manipulada
const elementKata1 = document.________________("kata1")

// Utilize o método de string "split()" para dividir as palavras em um array
let sentencaDividida = ___________________._____();

// Agora utilize o método "join()" para montar a string mas desta vez com um separador que faça sentido na sentença (espaço)
let novaStringKata1 = _____________________._____();

// Adicionar a variável 'novaStringKata1' no HTML
_____________.______________ = __________;

// O resultado deve ser "O rato roeu a roupa do Rei de Roma"

/* ------------------------------------------ */

// KATA 2

// Selecionar elemento do html
// const elementoKata2 = document.getElementById("kata2");

// Array simples de números aleatórios
let numerosKatas2 = [95, 32, 58, 89, 15, 65, 74, 2, 146];

// Você precisará utilizar o método SORT para colocar os números do array em ordem crescente.

// Observação: o método sort altera o array original

// Utilize o método sort e coloque o array 'numerosKatas2' no html

numerosKatas2._______

elementoKata2.________ = numerosKatas2


// Provavelmente, o resultado que apareceu no html foi "146,15,2,32,58,65,74,89,95", podemos notar com facilidade que não está em ordem crescente, isso acontece porque o método sort ordena em ordem alfabética por padrão.
// Sabemos que o número 15 vem antes do 146, mas em string no código UTF-16 o número 146 vem antes do 15.

// Para resolver é necessário passar uma função de callback para o método sort
// Ela receberá dois parametros (numero1, numero2) que representam dois itens do array e iremos compara-los

const ordena = (numero1, numero2) => {
  if (numero1 < numero2) {
    // se o numero1 for menor que o numero2
    // retornaremos o valor -1
    return -1;
  }
  if (numero1 > numero2) {
    // se o numero1 for mamor que o numero2
    // retornaremos o valor 1
    return 1;
  }
  // Se nenhum dos critérios acima forem satisfeitos
  // ou seja numero1 é igual ao número2, retornamos 0
  return 0;
}

// Agora colocaremos a função callback 'ordena' como parâmetro de sort e vamos adicionar o array 'numerosKatas2' novamente no html

numerosKatas2.sort(______)

elementoKata2.innerText = numerosKatas2


// Como ficou o resultado agora?

// Para finalizar esse kata, vamos retornar a soma de todos os itens, mas desta vez sem usar uma estrutura de repetição (for, while)

// Primeiro vamos criar uma função de callback para ser usado no método reduce
// A função de callback apa ser passada como parâmetro do reduce, precisará receber pelo menos dois parâmetros (acumulador, numeroAtual) o primeiro que será o valor que representa o total da soma e o segundo, o valor atual do array.

const soma = (acumulador, numeroAtual) => {
  // Complete para se tornar uma função de soma  
  return _________________________
}

// Vamos instanciar uma variável para guardar o resultado da soma
// e chamar o método reduce com a função de callback
let resultado = numerosKatas2.________(_______)

// Vamos criar um elemento e colocar no html para ficar organizado
let novaElemento = document.__________("p")

// Inserir um texto no elemento
novaElemento.___________ = `O valor total da soma dos itens do array é ${_____________}.`

// Pendurar o elemento criado no html
elementoKata2.____________(______________)






/* ------------------------------------------ */





// KATA 3

//Nesta kata, vamos pegar informações na tela (numbers e strings) e
//manipularemos no Javascript e colocaremos o resultado no HTML 

// vamos selecionar o elemento no HTML onde colocaremos o resultado
// Olhe o HTML e tente descobrir
const resultadoKata3 = document.getElementById(_____________)

// Vamos selecionar o botão que executará a função quando foi clicado
const btnMultiplicador = document.getElementById(_________________)

// Vamos criar a função que será chamada quando o botão for clicado
const dobraValores = () => {
  // Definiremos uma variável de saída (output)
  let output= ""

  // Precisamos pegar a opção que foi selecionada pelo usuário
  // DICA: Para selecionar um elemento input que esteja selecionado,
  // descrevemos o checked como pseudo-classe input:checked

  let inputSelecionado = document.____________(____________).value

  // A variável acima retorna uma string e para que possamos manipular seus valores podemos utilizar o método 'split'
  //Defina qual separador faz mais sentido
  
  let splitedInputSelecionado = inputSelecionado.______(_____);
  
  // Agora com o valor selecionado devidamente tratado, vamos pegar
  // o multiplicador que foi digitado pelo usuário

  let multiplicador = document.getElementById(______________).value

  // Para chegar no resultado solicitado, precisaremos passar por cada item
  // do array splitedInputSelecionado e fazer a multiplicação
  // Não utilizaremos o for e nem o while, vamos usar o método MAP

  // o MAP, irá iterar sobre cada item do array e irá executar sobre
  // o item a instrução que estiver na função de callback

  output = splitedInputSelecionado._____((numero) => {
    // Faremos a multiplicação com o item do array e com o valor do multiplicador
    let resultadoMultiplicacao = _________ * ______________;
    // E retornaremos o resultado
    return ___________________
  })
  // Pronto, só falta adicionar o resultado depois de ter passado pelo MAP
  // no HTML
  resultadoKata3.________________ = ________________

  return ___________;
}

// A função que usaremos no 'ouvidor de eventos' do botão estão feito
// Precisamos neste momento configurar o 'ouvidor de eventos' do botão,
// e definir qual será o evento e colocar a função "dobraValores" como um dos parâmetros

btnMultiplicador.____________________(_______, ___________)
