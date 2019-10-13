"use strict";
class User {
    //special kind of method or function
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    register() {
        console.log(this.name + ' is now registered');
    }
    payInvoice() {
        console.log(this.name + ' paid invoice');
    }
}
class Member extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice();
    }
}
let mike = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);
mike.payInvoice();
// let john = new User('John Doe', 'jdoe@gmail.com', 34);
// john.register();
// console.log(john.age);
