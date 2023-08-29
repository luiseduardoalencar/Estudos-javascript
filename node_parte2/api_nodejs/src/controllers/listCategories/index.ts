import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";


const categoriesrepository = new CategoriesRepository();
const listcategoryusecase = new ListCategoriesUseCase(categoriesrepository);
const listcategoriescontroller = new ListCategoriesController(listcategoryusecase);

export {listcategoriescontroller}