/// <reference types="node" />
declare global {
    interface Window {
        __ENV: NodeJS.ProcessEnv;
    }
}
export { env } from './env';
export { useEnvContext } from './use-env-context';
