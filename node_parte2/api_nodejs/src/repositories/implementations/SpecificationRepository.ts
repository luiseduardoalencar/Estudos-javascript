import { ISpecificationsRepository, iCreateSpecificationDTO } from "../ISpecificationsRepository";
import { Specification } from "../../entities/Specification";

class SpecificationRepository implements ISpecificationsRepository {
    
    private specifications: Specification[];

    constructor(){
        this.specifications = []
    }
    
    create({ name, description }: iCreateSpecificationDTO): void {
       const specification = new Specification();
       Object.assign(specification,{
        name,
        description,
        created_at: new Date()
       })
       this.specifications.push(specification)
    }
    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name)
        if(!specification) throw new Error("Specification not found")
        return specification
    }
    list(): Specification[]{
        return this.specifications;
    }
}
export { SpecificationRepository }