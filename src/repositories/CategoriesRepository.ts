// Repositorio = Camada responsável por acesso ao banco de dados, cadastros, select e toda manipulação com banco de dados.
// DTO = Data Transfer Object

import { Category } from '../model/Category'


interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository {

    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description } : ICreateCategoryDTO): void  {  // "void" = não possui retorno
        const category = new Category();

        Object.assign(category, { //atribuindo item por item para o category 
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(category => category.name === name);
        return category;
    }
}

export { CategoriesRepository }