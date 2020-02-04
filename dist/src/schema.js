"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const federation_1 = require("@apollo/federation");
const typeDefinitions_1 = __importDefault(require("./typeDefinitions"));
const resolvers_1 = __importDefault(require("./resolvers"));
const schema = federation_1.buildFederatedSchema({
    typeDefs: typeDefinitions_1.default,
    resolvers: resolvers_1.default
});
exports.default = schema;
//# sourceMappingURL=schema.js.map