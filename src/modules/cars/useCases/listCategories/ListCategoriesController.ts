import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
 
    constructor(private listCategoriesUseCaso: ListCategoriesUseCase) {}
    
    async handle(request: Request, response: Response): Promise<Response> {
        const all = await this.listCategoriesUseCaso.execute();
        return response.json(all);
    }
}

export { ListCategoriesController };