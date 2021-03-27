import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
 
    constructor(private listCategoriesUseCaso: ListCategoriesUseCase) {}
    
    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUseCaso.execute();
        return response.json(all);
    }
}

export { ListCategoriesController };