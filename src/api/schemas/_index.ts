    import { buildSchemaSync } from "type-graphql";
    import Items from "./items";
    import ItemsController from "../controllers/items.control";

    const schema = buildSchemaSync({
        resolvers: [Items, ItemsController]
    });

    export default schema;