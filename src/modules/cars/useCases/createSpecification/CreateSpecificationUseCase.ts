import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
constructor(private specificationsRepository: ISpecificationsRepository) {} //"private" = Para poder acessar a variável "this.", para estar disponível para toda a class

    execute({name, description}: IRequest): void{
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specifications already exists!");
        }

        this.specificationsRepository.create({
            name, 
            description
        })
    }
}

export { CreateSpecificationUseCase }