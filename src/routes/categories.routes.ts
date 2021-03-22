import { Router } from 'express';
import { Category } from '../model/Category';

const categoriesRoutes = Router();


categoriesRoutes.post("/", /* "/" = recurso */ (request, response) => {
    const { name, description } = request.body;

    const category = new Category();

    Object.assign(category, {
        name,
        description,
        created_at: new Date()
    })

    categories.push(category);

    return response.status(201).json({categories});

})    

export { categoriesRoutes };