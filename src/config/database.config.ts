import  mongoose from "mongoose";
import { EnvConfigs } from "./env/_index";
import logging from "../shared/logging";

export class Database{

    public ConnectToDB() : void {
        mongoose
            .connect(EnvConfigs.URL_MONGO)
            .then((result) => {
                logging.info(EnvConfigs.NAMESPACE, `Database Connected`)
            })
            .catch((error) => {
                logging.error(EnvConfigs.NAMESPACE, `Database error: ${error.message}`)
            });
    }
}