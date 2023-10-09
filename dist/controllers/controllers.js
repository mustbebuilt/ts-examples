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
exports.getAllData = void 0;
const Film_1 = require("../models/Film");
function getAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const films = yield Film_1.Film.find();
            console.dir(Film_1.Film);
            return films;
        }
        catch (error) {
            console.error("Error retrieving data:", error);
            return { error: "Failed to retrieve data" };
        }
    });
}
exports.getAllData = getAllData;
