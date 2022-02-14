import Items from "../schemas/items";
import { Query, Resolver, Mutation, Arg , ID} from "type-graphql";
import item from "../../core/domain/models/item";

@Resolver(Items)
class ItemsController{
    @Query(returns => [Items])
    async findItems(){
        return await item.find();
    }

    @Query(returns => Items)
    async findItemById(
        @Arg("_id") _id : string
    ){
        return await item.findById({_id});
    }

    @Mutation(returns => Items)
    async createItem(
        @Arg("name") name : string,
        @Arg("desc") desc : string
    ){
        return await item.create({name, desc});
    }

    @Mutation(returns => Items)
    async updateItem(
        @Arg("_id") _id : string,
        @Arg("name") name : string,
        @Arg("desc") desc : string
    ){
        return await item.findByIdAndUpdate(_id,{name, desc});
    }

    @Mutation(returns => Items)
    async removeItem(
        @Arg("_id") _id : string
    ){
        return await item.findByIdAndDelete({_id});
    }
}

export default ItemsController;