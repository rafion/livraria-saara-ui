export interface Livro {
    id?: number;
    titulo: string;
    isbn: string;
    precoUnitario: number;
    disponivel: boolean;
    autor: string;
    editora: string;
    url_img: string;
}

export interface MeioPagamento {
    id?: number;
    nome: number;
}

export interface Pagamento {
    id?: number;
    valorTotal: number;
    meioPagamentoId: number;
}

export interface Pedido {
    id?: number;
    valorTotal: number;
    clienteId: number;
    status?: string;
    itens: ItemPedido[];
    pagamento: Pagamento;

}

export interface ItemPedido {
    id?: number;
    item: number;
    livroId: number;
    quantidade: number;
    precoUnitario: number;
    precoTotal: number;
}

export interface User {
    id?: number;
    username: string;
    password: string;
    nome: string;
    cpf: string;
    email: string;
    endereco: Endereco;
}

export interface Endereco {

    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    municipio: string;
    estado: string;
    bairro: string;
}

