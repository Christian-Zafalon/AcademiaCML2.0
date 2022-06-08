import { Endereco } from "./Endereco";

export class Pessoa {
    id!:number;
    nome!:string;
    telefone!: string;
    email!:string;
    documento!: string;
    dataNascimento!: string;
    endereco: Endereco = new Endereco;
}
