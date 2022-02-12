import Items from "../schemas/items";
import { Query, Resolver, Mutation, Arg } from "type-graphql";
import item from "../../core/domain/models/item";

@Resolver(Items)
class ItemsController{
    @Query(returns => [Items])
    async findItem(){
        return await item.find();
    }

    @Mutation(returns => Items)
    async createItem(
        @Arg("name") name : string,
        @Arg("desc") desc : string
    ){
        return await item.create({name, desc});
    }
}

export default ItemsController;