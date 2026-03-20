"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../src/app");
describe("multiquote endpoint", () => {
    test("returns 400 with invalid payload", async () => {
        const app = (0, app_1.createApp)();
        const response = await (0, supertest_1.default)(app).post("/api/v1/quotes/auto/multi").send({});
        expect(response.status).toBe(400);
    });
    test("health endpoint", async () => {
        const app = (0, app_1.createApp)();
        const response = await (0, supertest_1.default)(app).get("/health");
        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
    });
});
