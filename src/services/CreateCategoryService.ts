// Services = Camada de mais alto nível.

import { CategoriesRepository } from "../repositories/CategoriesRepository";

// Não deve depender de códigos que dependem de mais baixo nível.
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({description, name}: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!"); //throw: Nativo do JS
        }

        this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryService }