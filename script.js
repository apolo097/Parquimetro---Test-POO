class Parquimetro {
    constructor(valor) {
        this.valor = valor;
    }

    calcularTempo() {
        if (this.valor < 1) {
            return 'Valor Insuficiente';

        } else if (this.valor < 1.75) {
            return '30 Minutos';

        } else if (this.valor < 3) {
            return '60 Minutos';

        } else {
            return '120 Minutos';

        }
    }

    calcularTroco() {
        if (this.valor < 1) {
            return 'Valor Insuficiente';

        } else if (this.valor < 1.75) {
            return this.valor - 1;

        } else if (this.valor < 3) {
            return this.valor - 1.75;

        } else {
            return this.valor - 3;

        }
    }

}


//Pegar os elementos da página.
const inputValor = document.getElementById('valor');
const botaoCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');



botaoCalcular.addEventListener('click', function () {                                 //Botao que pegamos acima

    const valorDigitado = inputValor.value;

    const valor = Number(
        valorDigitado.replace(',', '.') //transformar em numero com a substituição de virgula para ponto
    );

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
    const trocoFormatado = troco.toLocaleString('pt-BR', {
        style:'currency',
        currency: 'BRL'
    });

    resultado.textContent = `Tempo: ${tempo} | Troco: ${trocoFormatado}`;
});
