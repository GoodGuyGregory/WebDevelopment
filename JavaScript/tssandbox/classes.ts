//classes have both properties and Methods
//static type
interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface{
     name: string;
     email: string;
     age: number;

    // no argument constructor
    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("User Created: "+this.name);
    }

    register(){
        console.log(this.name+' is now registered');
    }
    payInvoice(){
        console.log(this.name+' paid invoice');
    }
}

class Member extends User{
    id: number;
    constructor(id: number, name: string, email: string,age: number){
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

let Jon = new User('Jon', 'jonwitt@unknown.com', 24);

//console.log(Jon.age);
//Jon.register();

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 34);
mike.payInvoice();