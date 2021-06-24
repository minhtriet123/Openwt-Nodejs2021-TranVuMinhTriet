export class Customer {
    private _ID: number
    private _name: string
    private _gender: String


    constructor(id: number, name: string, gender: string) {
        this._ID = id
        this._name = name
        this._gender = gender
    }
    public get ID(): number {
        return this._ID;
    }

    public set ID(ID: number) {
        this._ID = ID;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string
    ) {
        this._name = name;
    }

    public get gender(): String {
        return this._gender;
    }

    public set gender(gender: String) {
        this._gender = gender;
    }
    toString(){
        return `${this.name}(${this._ID})`
    }

}