// Repositorio = Camada responsável por acesso ao banco de dados, cadastros, select e toda manipulação com banco de dados.
// DTO = Data Transfer Object

import { Category } from '../../entities/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';

import { getRepository, Repository } from 'typeorm';

class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>;
    
    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description } : ICreateCategoryDTO): Promise<void>  {  // "void" = não possui retorno
        const category = this.repository.create({ 
            name, 
            description 
        })

        await this.repository.save(category)
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository }