import request from "supertest";
import { createApp } from "../src/app";

describe("multiquote endpoint", () => {
  test("returns 400 with invalid payload", async () => {
    const app = createApp();
    const response = await request(app).post("/api/v1/quotes/auto/multi").send({});
    expect(response.status).toBe(400);
  });

  test("health endpoint", async () => {
    const app = createApp();
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
  });
});
