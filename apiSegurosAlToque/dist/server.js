"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = require("./config/env");
const logger_1 = require("./utils/logger");
(0, env_1.validateRequiredProductionEnv)();
const app = (0, app_1.createApp)();
app.listen(env_1.env.port, () => {
    logger_1.logger.info(`Multicotizador API running on port ${env_1.env.port}`);
});
