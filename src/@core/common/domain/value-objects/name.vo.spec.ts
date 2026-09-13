import { Customer } from "../../../events/domain/entities/customer.entity";
import { Name } from "./name.vo";


test('deve criar nome valido', () => {
     const name = new Name('aaaaa');
     expect(name.value).toBe('aaaaa');
})