import { randomUUID } from "node:crypto";
import { AggregateRoot } from "../../../common/domain/aggregate-root";
import { Name } from "../../../common/domain/value-objects/name.vo";

export type CustomerConstructorProps = {
    id?: string;
    cpf: string;
    name: Name;
};

export class Customer extends AggregateRoot{
    id: string;
    cpf: string;
    name: Name;

    constructor(props: CustomerConstructorProps){
        super();
        this.id = props.id ?? randomUUID();
        this.cpf = props.cpf;
        this.name = props.name;
    }

    static create(command: {name: Name, cpf: string}){
        return new Customer({id: randomUUID() ,...command});
    }

    toJson(){
        return {
            id: this.id,
            cpf: this.cpf,
            name: this.name,
        };
    }
}