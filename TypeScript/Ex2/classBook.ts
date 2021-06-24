import { Author } from './classAuthor'
export class Book {
    private _isbn: string
    private _name: string
    private _author: Author
    private _price: number
    private _qty: number

    constructor(isbn: string, n: string, a: Author, p: number, qty: number = 0) {
        this._isbn = isbn
        this._name = n
        this._author = a
        this._price = p
        this._qty = qty
    }
    public get isbn(): string {
        return this._isbn;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string
    ) {
        this._name = name;
    }

    public get author(): Author {
        return this._author;
    }

    public set author(author: Author
    ) {
        this._author = author;
    }

    public get price(): number {
        return this._price;
    }

    public set price(price: number
    ) {
        this._price = price;
    }

    public get qty(): number {
        return this._qty;
    }

    public set qty(qty: number) {
        this._qty = qty;
    }

    public get authorName(): string {
        return this.author.getName;
    }
    toString() {
        return `Book[ibsn=${this._isbn},${this.author.toString()},price=${this._price},qty=${this._qty}]`
    }
}
