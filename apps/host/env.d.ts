declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REMOTE_PATH: string;
    }
  }
}
export {};
