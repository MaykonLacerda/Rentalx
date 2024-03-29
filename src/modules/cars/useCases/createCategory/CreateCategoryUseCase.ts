// Services = Camada de mais alto nível.
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

// Não deve depender de códigos que dependem de mais baixo nível.
interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(@inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository) { }

    async execute({ description, name }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new AppError("Category already exists!"); //throw: Nativo do JS
        }

        this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryUseCase }