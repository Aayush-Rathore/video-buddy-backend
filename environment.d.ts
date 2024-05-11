declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      CORS_ORIGIN: string;
    }
  }
}

export {};
