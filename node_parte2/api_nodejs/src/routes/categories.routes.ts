
import { Router } from "express"; 
import multer from "multer";
import { CreateCategoryController } from "../controllers/createCategory/CreateCategoryController";
import { importCategoryController } from "../controllers/importCategory";
import { listcategoriescontroller } from "../controllers/listCategories";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();


categoriesRoutes.post("/",createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
    return listcategoriescontroller.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});



export { categoriesRoutes };
