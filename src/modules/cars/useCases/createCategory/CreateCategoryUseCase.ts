// Services = Camada de mais alto nível.

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

// Não deve depender de códigos que dependem de mais baixo nível.
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute({description, name}: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!"); //throw: Nativo do JS
        }

        this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryUseCase }