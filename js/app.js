import { Parquimetro } from "./classes.js";
import { converterParaNumero, formatarMoeda, calcularTempoMaximo, gerarLinhasTabela} from "./utils.js";


//Pegar os elementos da página.
const inputValor = document.getElementById('valor');
const botaoCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

const tabelaPrecos = document.getElementById('tabela-precos');
const tempoMaximo = document.getElementById('tempo-maximo');


botaoCalcular.addEventListener('click', function () {                                 //Botao que pegamos acima

    const valorDigitado = inputValor.value;

   const valor = converterParaNumero(valorDigitado);

    //Tratando erros     
    if (valorDigitado.trim() === ''){
        resultado.textContent = 'Digite um valor válido';
        return;
    }

    if (Number.isNaN(valor)) {
        resultado.textContent = 'Digite um valor válido';
        return;
    }    
   

    //Criar o objeto com o valor que transformei guardado nele. 
    const parquimetro = new Parquimetro(valor);

    //Criando a resposta
    const tempo = parquimetro.calcularTempo();
    const troco = parquimetro.calcularTroco();

    
    const trocoFormatado = formatarMoeda(troco);
    
    resultado.textContent = `Tempo: ${tempo} | Troco: ${trocoFormatado}`;
});

function montarTabela() {
    const linhas = gerarLinhasTabela();
    tabelaPrecos.insertAdjacentHTML('beforeend',linhas.join(''));
    tempoMaximo.textContent = calcularTempoMaximo();
};

montarTabela();