// Rota: Receber requisição, chamar um serviço, algum repositorio e retornar a informação recebida.

import { Router } from 'express';
import multer from 'multer'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
})

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.post("/import", upload.single("file"),  importCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);


export { categoriesRoutes };