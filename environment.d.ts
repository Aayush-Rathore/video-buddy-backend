declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      HASH_SALT: number;
      TEMP_TOKEN_KEY: string;
      TEMP_TOKEN_EXPIRY: string;

      MONGO_URI: string;
      CORS_ORIGIN: string;
    }
  }
}

export {};
