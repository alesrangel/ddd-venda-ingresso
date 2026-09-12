import { randomUUID } from "crypto";
import { AggregateRoot } from "../../../common/domain/aggregate-root.js";

export type CustomerConstructorProps = {
    id: string;
    cpf: string;
    name: string;
};

export class Customer extends AggregateRoot{
    id: string;
    cpf: string;
    name: string;

    constructor(props: CustomerConstructorProps){
        super();
        this.id = props.id;
        this.cpf = props.cpf;
        this.name = props.name;
    }

    static create(command: {name: string, cpf: string}){
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