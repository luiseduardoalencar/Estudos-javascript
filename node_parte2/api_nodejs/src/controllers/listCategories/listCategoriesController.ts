import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {
    constructor(private listcategoriesusecase: ListCategoriesUseCase){}
    
    handle(request: Request, response: Response): Response{
        const all = this.listcategoriesusecase.execute();
        return response.json(all);
    }
}
export {ListCategoriesController}