import { encontrarTarifa } from "./utils.js";

export class Parquimetro {
    constructor(valor) {
        this.valor = valor; //propriedade do objeto = parametro que chegou --- Basicamente guardo em this.valor o valor que chegou para usar nos metodos
    }

    calcularTempo() {
        const tarifa = encontrarTarifa(this.valor);

        if (tarifa) {
            return `${tarifa.minutos} Minutos`;
        } else {
            return "Valor Insuficiente";
        }
    }

    calcularTroco() {
        const tarifa = encontrarTarifa(this.valor);

        if (tarifa) {
            return this.valor - tarifa.valor
        } else {
            return "Valor Insuficiente"
        }
    }
}
