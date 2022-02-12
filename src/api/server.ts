import 'reflect-metadata';
require('dotenv').config({ path: '.env' });
import { ApolloServer } from 'apollo-server';
import { EnvConfigs } from '../config/env/_index';
import { Database } from '../config/database.config';
import schema from './schemas/_index'
import logging from '../shared/logging';

;(async () => {
    const database = new Database();
    await database.ConnectToDB();
    const server = new ApolloServer({ schema });
    server.listen({ port: EnvConfigs.API_PORT }, () => {
        logging.info( EnvConfigs.NAMESPACE ,`listening on ${EnvConfigs.API_PORT} `)
    });
})()