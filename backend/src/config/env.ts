import dotenv from 'dotenv';
import { z } from 'zod';

const instructionsURL =
  'https://github.com/alberto-rj/audiophile/backend/README.md#environment-variables';

const envSchema = z.object({
  PORT: z.coerce.number().default(4224),
  SERVER_URL: z.string(),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  JWT_ACCESS_SECRET: z.string().default('secret'),
  JWT_ACCESS_EXPIRES_IN_DAYS: z.coerce.number().default(7),
  DATABASE_URL: z.string(),
});

dotenv.config({ path: '.env', quiet: true });

const envResult = envSchema.safeParse(process.env);

if (!envResult.success) {
  throw new Error(
    `Please refer to the instructions at ${instructionsURL} to configure the environment variables correctly.`,
  );
}

export const env = envResult.data;
