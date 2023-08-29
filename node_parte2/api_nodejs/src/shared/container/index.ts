import { container } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";


//ICategoriesrepository, //sempre que o registro for chamado, saberemos qual classe será chamada
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", //nome do registro
    CategoriesRepository //classe que será instanciada
)
