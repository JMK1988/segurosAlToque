import { createApp } from "./app";
import { env, validateRequiredProductionEnv } from "./config/env";
import { logger } from "./utils/logger";

validateRequiredProductionEnv();

const app = createApp();

app.listen(env.port, () => {
  logger.info(`Multicotizador API running on port ${env.port}`);
});
