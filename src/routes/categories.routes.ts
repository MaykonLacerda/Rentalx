// Rota: Receber requisição, chamar um serviço, algum repositorio e retornar a informação recebida.

import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", /* "/" = recurso */ (request, response) => {
    const { name, description } = request.body;
    
    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({name, description});

    return response.status(201).send();
});
categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all);
})

export { categoriesRoutes };