export class Author {
    private name: string
    private email: string
    
   
    constructor( n: string, e: string){
        this.name = n
        this.email = e
        
    }
    get getName(): string {
        return this.name
    }
    get getEmail(): string {
        return this.email
    }
    
    set setEmail(newEmail: string) {
        this.email = newEmail
    }
    toString() {
        return `Author[name=${this.name},email=${this.email}]`
    }

} 