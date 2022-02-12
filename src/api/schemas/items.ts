import { IItem } from "../../shared/interfaces/_index";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class Items implements IItem{
    
    @Field( type => ID , {nullable:true} )
    _id?: string | undefined;
    
    @Field()
    name!: string;
    
    @Field()
    desc!: string;
    
}
export default Items;