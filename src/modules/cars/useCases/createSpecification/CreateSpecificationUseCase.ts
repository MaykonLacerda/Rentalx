import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";
import { inject, injectable } from 'tsyringe';
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository) { } //"private" = Para poder acessar a variável "this.", para estar disponível para toda a class

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new AppError("Specifications already exists!");
        }

        await this.specificationsRepository.create({
            name,
            description
        })
    }
}

export { CreateSpecificationUseCase }