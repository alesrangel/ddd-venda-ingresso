import { Customer } from "../../../events/domain/entities/customer.entity";
import { Name } from "./name.vo";


test('deve criar nome valido', () => {
     const name = new Name('aaaaa');
     expect(name.value).toBe('aaaaa');
     
     const customer = new Customer({
          cpf: '111.111.111-11',
          name,
     });

     customer.name = new Name('bbbbb');
     console.log(customer.name);
     expect(customer.name).toBe('bbbbb');
})