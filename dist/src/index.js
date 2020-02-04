"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_gql_1 = __importDefault(require("fastify-gql"));
const schema_1 = __importDefault(require("./schema"));
const config_1 = require("../config");
const client_1 = require("@prisma/client");
const app = fastify_1.default();
const db = new client_1.PrismaClient();
app.register(fastify_gql_1.default, {
    schema: schema_1.default,
    graphiql: 'playground',
    jit: 1,
    context: () => ({ db }),
});
app.route({
    method: 'GET',
    url: '/health',
    schema: {
        querystring: {
            name: { type: 'string' },
            excitement: { type: 'integer' }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    },
    handler(request, reply) {
        reply.send({ hello: 'world' });
    }
});
app.listen(config_1.port, () => {
    console.log(`Server running on port ${config_1.port}`);
});
//# sourceMappingURL=index.js.map