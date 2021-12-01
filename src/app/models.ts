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