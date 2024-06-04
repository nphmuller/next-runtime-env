/// <reference types="node" />
declare global {
    interface Window {
        __ENV: NodeJS.ProcessEnv;
    }
}
export * from './provider';
export * from './script';
