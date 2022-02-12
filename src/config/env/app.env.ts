export const EnvConfigs = {
    API_PORT: parseInt(process.env.API_PORT as string || "3002"),
    URL_MONGO: process.env.URL_MONGO as string || "mongodb+srv://matheuscaet:mongopassword20092021@cluster0.cfpvj.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-1023j9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
    NAMESPACE: process.env.NAMESPACE as string || "SERVER"
}