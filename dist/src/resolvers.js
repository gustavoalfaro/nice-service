"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    Query: {
        user(source, { username }, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                const author = yield db.user.findOne({ where: { username } });
                return author;
            });
        },
    },
    User: {
        telephones({ id }, args, { db }) {
            return __awaiter(this, void 0, void 0, function* () {
                const telephones = yield db.telephone.findMany({ where: { user: { id } } });
                return telephones;
            });
        },
        otherField({ id }, args, { db }) {
            return __awaiter(this, void 0, void 0, function* () {
                const otherField = yield db.oneToMay.findMany({ where: { user: { id } } });
                return otherField;
            });
        },
        __resolveReference({ id }, { db }) {
            return __awaiter(this, void 0, void 0, function* () {
                const [author] = yield db.select('Author', { id });
                return author;
            });
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map