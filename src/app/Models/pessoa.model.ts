export interface PessoaModel {
    id: number;
    nome: string;
    cpf: string;
    idade: number;
    estadoCivil: string;
    cidade: string;
    estado: string;
}

export interface DisplayMessage {
    [key: string]: string
}