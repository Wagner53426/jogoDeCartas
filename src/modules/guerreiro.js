import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
    static tipo = 'Guerreiro'
    static descricao =  'Você será esmagado pela força'

    constructor(nome, forca) {
        super(nome)
        this.forca = forca
    }

    obterInsignia() {
        return `Guerreiro Furioso`

        return super.obterInsignia()
    }
}