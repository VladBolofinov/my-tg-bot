declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BOT_API_TOKEN: string;
        }
    }
}

export {}