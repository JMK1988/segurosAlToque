"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinciaToken = getProvinciaToken;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../../config/env");
let tokenCache = null;
async function getProvinciaToken() {
    if (tokenCache && Date.now() < tokenCache.expiresAt) {
        return tokenCache.value;
    }
    const body = new URLSearchParams();
    body.set("client_id", env_1.env.provincia.clientId);
    body.set("client_secret", env_1.env.provincia.clientSecret);
    body.set("username", env_1.env.provincia.username);
    body.set("password", env_1.env.provincia.password);
    body.set("grant_type", "password");
    const response = await axios_1.default.post(env_1.env.provincia.authUrl, body.toString(), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        timeout: 15000
    });
    tokenCache = {
        value: response.data.access_token,
        expiresAt: Date.now() + Math.max(30, response.data.expires_in - 60) * 1000
    };
    return tokenCache.value;
}
