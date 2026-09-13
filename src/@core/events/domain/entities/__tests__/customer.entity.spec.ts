import { Customer } from "../customer.entity";

test('deve criar um client', () =>{
    const customer = Customer.create({
        name:'João',
        cpf:'30510123007'
    });
})