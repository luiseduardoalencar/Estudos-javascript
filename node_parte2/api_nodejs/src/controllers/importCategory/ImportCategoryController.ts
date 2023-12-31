import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
    const { file } = request;

    if (!file) {
      return response.status(400).json({ error: "No file uploaded." });
    }

    await this.importCategoryUseCase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
